Template.websiteItem.helpers({
	comments: function() {
		return this.comments;
	},
	user: function(userId) {
		var user = Users.getUser(userId);
		return user["emails"][0]["address"];
	}

})

Template.websiteItem.events({
	'click .submit-comment': function() {
		if (Users.isLoggedIn()) {
			var $comment = $('.comment-box');
			var commentVal = $comment.val()
			if (commentVal !== '') {
				var comment = {
					text: commentVal,
					user: Meteor.userId(),
					createdAt: new Date()
				};
				Websites.addComment(this._id, comment);
				$comment.val('');
			} else {
				sAlert.warning('Please type something inside the box', {
					effect: "bouncyflip",
					position: 'top-right',
					onRouteClose: true
				});
			}
		} else {
			sAlert.error('Please login first to comment.', {
				effect: "flip",
				onRouteClose: true
			});
		}
	}
})
