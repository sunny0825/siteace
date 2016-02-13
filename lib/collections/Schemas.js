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
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {
					$setOnInsert: new Date()
				};
			} else {
				this.unset(); // Prevent user from supplying their own value
			}
		}
	},
	// Force value to be current date (on server) upon update
	// and don't allow it to be set upon insert.
	updatedAt: {
		type: Date,
		autoValue: function() {
			if (this.isUpdate) {
				return new Date();
			}
		},
		denyInsert: true,
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
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {
					$setOnInsert: new Date()
				};
			} else {
				this.unset(); // Prevent user from supplying their own value
			}
		}
	},
	// Force value to be current date (on server) upon update
	// and don't allow it to be set upon insert.
	updatedAt: {
		type: Date,
		autoValue: function() {
			if (this.isUpdate) {
				return new Date();
			}
		},
		denyInsert: true,
		optional: true
	}
});
