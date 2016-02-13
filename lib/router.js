Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() {
		var subs = [];
		subs.push(Meteor.subscribe('websites'));
		subs.push(Meteor.subscribe('users'));
		return subs;
	}
})

Router.route('/', {
	name: 'home',
	data: function() {
		return Websites.find({}, {
			sort: {
				upvote: -1
			}
		});
	}
});

Router.route('/web/:_id', {
	name: 'websiteItem',
	date: function() {
		websiteId = this.params._id;
		return Websites.findOne({
			_id: websiteId
		});
	}
})
