Meteor.startup(function () {
    sAlert.config({
        effect: 'flip',
        position: 'top',
        timeout: 3000,
        html: false,
        onRouteClose: true,
        stack: {
          spacing: 10,
          limit: 3
        },
        offset: 0,
        beep: false
    });

});
