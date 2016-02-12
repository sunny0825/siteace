Websites = new Mongo.Collection("websites");

Websites.allow({
	insert: function(userId, website) {
		return Meteor.userId();
	}
});


Websites.addWebsite = function(url, title, description) {
	Websites.insert({
		url: url,
		title: title,
		description: description
	}, function(err, websiteId) {
		if (err) {
			console.dir(err);
		}
	});
}
