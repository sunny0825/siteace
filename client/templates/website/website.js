Template.website.helpers({
	upvoteChecked: function() {
		return Users.isLoggedIn() && Users.websiteUpvoted(this._id);
	},
	downvoteChecked: function() {
		return Users.isLoggedIn() && Users.websiteDownvoted(this._id);
	},
	upvoteCount: function() {
		return Websites.getUpvote(this._id);
	},
	downvoteCount: function() {
		return Websites.getDownvote(this._id);
	}
});

Template.website.events({
	"click .js-upvote": function() {
		Users.upvoteWebsite(this._id);
		return false; // prevent the button from reloading the page
	},
	"click .js-downvote": function() {
		Users.downvoteWebsite(this._id);
		return false; // prevent the button from reloading the page
	}
})
