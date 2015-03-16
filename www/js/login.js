var App = App || {};
App.login = {
  template: App.templates.login,

  initialize: function(callback) {
    _.bindAll(this);
    this.successCallback = callback;
    this.$appliactionContainer = $("#applicationContainer");
    this.$appliactionContainer.html(this.template());
    this.cacheElements();
    this.registerEvents();
  },

  cacheElements: function() {
    this.$email = $("#email-field");
    this.$password = $("#password-field");
    this.$submit = $("#submit");
  },

  registerEvents: function() {
    this.$submit.on("click", this.loginUser);
  },

  setCurrentUser: function(responseData) {
    App.currentUser = responseData;
  },

  loginUser: function() {
    var request = $.ajax({
      type: 'POST',
      url: App.settings.productionApiUrl + '/users/sign_in.json',  // need url switching
      // url: 'http://localhost:3000/users/sign_in.json',
      crossDomain: true,
      data: {
        user: {
          email: this.$email.val(),
          password: this.$password.val()
        },
      },
      dataType: 'json'
    });
    request.done(this.loginSuccess);
    request.fail(this.loginFailure);
  },

  loginSuccess: function(responseData) {
    this.setCurrentUser(responseData);
    this.successCallback();
  },

  loginFailure: function() {
    alert("There was a problem, please try again.");
  }
};
