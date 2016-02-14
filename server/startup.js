// start up function that creates entries in the Websites databases.
Meteor.startup(function() {
	// code to run on server at startup
	if (!Websites.findOne()) {
		console.log("No websites yet. Creating starter data.");
		Websites.insert({
			title: "Goldsmiths Computing Department",
			url: "http://www.gold.ac.uk/computing/",
			description: "This is where this course was developed.",
			upvote: 10,
			downvote: 3
		});
		Websites.insert({
			title: "University of London",
			url: "http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
			description: "University of London International Programme.",
			upvote: 5,
			downvote: 1
		});
		Websites.insert({
			title: "Coursera",
			url: "http://www.coursera.org",
			description: "Universal access to the world’s best education.",
			upvote: 15,
			downvote: 0
		});
		Websites.insert({
			title: "Google",
			url: "http://www.google.com",
			description: "Popular search engine.",
			upvote: 12,
			downvote: 8
		});
		Websites.insert({
			title: "Meteor",
			url: "https://www.meteor.com/",
			description: "Build Reactive Apps for Web, Mobile, and Descktop",
			upvote: 10,
			downvote: 3
		});
		Websites.insert({
			title: "Lynda.com",
			url: "http://www.lynda.com/",
			description: "New skills. Improved skills. Now. Learn technology, creative and business skills you can use today",
			upvote: 5,
			downvote: 1
		});
		Websites.insert({
			title: "Sails.js",
			url: "http://sailsjs.org/",
			description: "Realtime MVC Framework for Node.js",
			upvote: 15,
			downvote: 0
		});
		Websites.insert({
			title: "Yelp",
			url: "http://www.yelp.com/",
			description: "Yelp is the best way to find great local businesses",
			upvote: 12,
			downvote: 8
		});
	}
});
