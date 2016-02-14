confirmSelf = function(userId) {
	return Meteor.userId() === userId
};

Meteor.users.allow({
	insert: confirmSelf,
	update: confirmSelf,
	remove: confirmSelf
});

Users = {
	getCollection: function() {
		return Meteor.users;
	},
	isLoggedIn: function(userId = Meteor.userId()) {
		return !!userId;
	},
	logout: function() {
		Meteor.logout();
	},
	getUser: function(userId = Meteor.userId()) {
		return this.getCollection().findOne({
			_id: userId
		});
	},
	getVotes: function(userId = Meteor.userId()) {
		user = User.getUser(userId);
		if (user) {
			return user.votes;
		}
	},
	getUpvotes: function(userId = Meteor.userId()) {
		user = Users.getUser(userId);
		if (user) {
			return user.upvotes;
		}
	},
	getDownvotes: function(userId = Meteor.userId()) {
		user = Users.getUser(userId);
		if (user) {
			return user.downvotes;
		}
	},
	updateUpvotes: function(upvotes) {
		userId = Meteor.userId();
		this.getCollection().update({
			_id: userId
		}, {
			$set: {
				"upvotes": upvotes
			}
		})
	},
	updateDownvotes: function(downvotes) {
		userId = Meteor.userId();
		this.getCollection().update({
			_id: userId
		}, {
			$set: {
				downvotes: downvotes
			}
		})
	},
	websiteUpvoted: function(websiteId) {
		upvotes = Users.getUpvotes();
		if (upvotes) {
			upvoteIndex = _.indexOf(upvotes, websiteId);
			return upvoteIndex != -1;
		}
	},
	websiteDownvoted: function(websiteId) {
		downvotes = Users.getDownvotes();
		if (downvotes) {
			downvoteIndex = _.indexOf(downvotes, websiteId);
			return downvoteIndex != -1;
		}
	},
	upvoteWebsite: function(websiteId) {
		if (Users.isLoggedIn()) {
			upvotes = Users.getUpvotes();
			upvoteIndex = _.indexOf(upvotes, websiteId);
			downvotes = Users.getDownvotes();
			downvoteIndex = _.indexOf(downvotes, websiteId);
			if (upvoteIndex === -1) {
				upvotes.push(websiteId);
				Users.updateUpvotes(upvotes);
				Websites.addUpvote(websiteId);
				if (downvoteIndex !== -1) {
					downvotes.splice(downvoteIndex, 1);
					Users.updateDownvotes(downvotes);
				}
			} else {
				sAlert.warning('You already upvote this website', {
					effect: "bouncyflip",
					position: 'bottom-right',
					onRouteClose: true
				});
			}
		} else {
			sAlert.error("Please login first to upvote this website.", {
				effect: "flip",
				onRouteClose: true
			})
		}
	},
	downvoteWebsite: function(websiteId) {
		if (Users.isLoggedIn()) {
			downvotes = Users.getDownvotes();
			downvoteIndex = _.indexOf(downvotes, websiteId);
			upvotes = Users.getUpvotes();
			upvoteIndex = _.indexOf(upvotes, websiteId);
			if (downvoteIndex === -1) {
				downvotes.push(websiteId);
				Users.updateDownvotes(downvotes);
				Websites.addDownvote(websiteId);
				if (upvoteIndex !== -1) {
					upvotes.splice(upvoteIndex, 1);
					Users.updateUpvotes(upvotes);
				}
			} else {
				sAlert.warning('You already downvote this website', {
					effect: "bouncyflip",
					position: 'bottom-right',
					onRouteClose: true
				});
			}
		} else {
			sAlert.error("Please login first to downvote this website.", {
				effect: "flip",
				onRouteClose: true
			})
		}
	}
}
