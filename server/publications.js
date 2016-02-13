Meteor.publish('websites', function() {
	return Websites.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find();
})
