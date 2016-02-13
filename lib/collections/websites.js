Websites = new Mongo.Collection("websites");
Websites.attachSchema(Schemas.Website);

Websites.allow({
	insert: function(userId, website) {
		return Users.isLoggedIn(userId);
	},
	update: function(userId, doc, fieldNames, modifier) {
		return Users.isLoggedIn(userId);
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

Websites.getUpvote = function(websiteId) {
	var website = Websites.findOne({
		_id: websiteId
	});
	if (website) {
		return website.upvote;
	}
}

Websites.getDownvote = function(websiteId) {
	var website = Websites.findOne({
		_id: websiteId
	});
	if (website) {
		return website.downvote;
	}
}

Websites.addUpvote = function(websiteId) {
	var upvote = Websites.getUpvote(websiteId);
	var downvote = Websites.getDownvote(websiteId);
	if (downvote > 0) {
		downvote = downvote - 1;
	}
	Websites.update({
		_id: websiteId
	}, {
		$set: {
			upvote: upvote + 1,
			downvote: downvote
		}
	})
}

Websites.addDownvote = function(websiteId) {
	var downvote = Websites.getDownvote(websiteId);
	var upvote = Websites.getUpvote(websiteId);
	if (upvote > 0) {
		upvote = upvote - 1;
	}
	Websites.update({
		_id: websiteId
	}, {
		$set: {
			downvote: downvote + 1,
			upvote: upvote
		}
	})
}
