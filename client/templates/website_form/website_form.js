Template.websiteForm.events({
	"click .submit-website-form": function(event) {
		var $url = $('.js-save-website-form .url');
		var $title = $('.js-save-website-form .title');
		var $description = $('.js-save-website-form .description');
		var urlVal = $url.val();
		var titleVal = $title.val();
		var descVal = $description.val();

		if (!urlVal || !titleVal || !descVal) {
			sAlert.warning('Please enter ALL information', {
				effect: "bouncyflip",
				position: 'bottom-left',
				onRouteClose: true
			});
		} else {
			websiteId = Websites.addWebsite(urlVal, titleVal, descVal);
			$('.websit-form-modal').modal('hide');
			$url.val('');
			$title.val('');
			$description.val('');
		}

		//  put your website saving code in here!

		return false; // stop the form submit from reloading the page

	}
});
