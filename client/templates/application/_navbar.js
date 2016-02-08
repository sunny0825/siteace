Template.navbar.events({
  'click .dropdown-menu': function(event) {
    event.stopPropagation();
  },

  'click .show-signup': function(event) {
    event.preventDefault();
    $('.signup-form').toggleClass("show")
  },

  'submit .login-form': function(event) {
    event.preventDefault();
    var $email = $('.loginEmail');
    var $password = $('.loginPassword');
    Meteor.loginWithPassword($email.val(), $password.val(), function(err) {
      if(err) {
        sAlert.error(err.reason, {
          effect: "stackslide",
          onRouteClose: true
        })
      }
    });
  },

  'submit .signup-form': function(event) {
      event.preventDefault();
      var $email = $('.registerEmail');
      var $password = $('.registerPassword');
      Accounts.createUser({
        email: $email.val(),
        password: $password.val()
      }, function(err) {
        if(err) {
          $email.val("");
          $password.val("");
          sAlert.error(err.reason, {
            effect: "stackslide",
            onRouteClose: true
          });
        }
      });
      return false;
    },

  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
})

Template.navbar.helpers({
  loggedInUser: function() {
    return Meteor.user()["emails"][0]["address"]
  }
})
