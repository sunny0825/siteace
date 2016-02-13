Schemas = {};

Schemas.User = new SimpleSchema({
	emails: {
		type: [Object],
		optional: true,
		blackbox: true
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	upvotes: {
		type: [String],
		defaultValue: [],
		optional: true
	},
	downvotes: {
		type: [String],
		defaultValue: [],
		optional: true
	}
});

Meteor.users.attachSchema(Schemas.User);

Schemas.Website = new SimpleSchema({
	url: {
		type: String,
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	upvote: {
		type: Number,
		defaultValue: 0,
		optional: true
	},
	downvote: {
		type: Number,
		defaultValue: 0,
		optional: true
	}
});
