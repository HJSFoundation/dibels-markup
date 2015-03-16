var App = App || {};
App.Login = function() {

  this.initialize = function(callback) {
    _.bindAll(this);
    this.successCallback = callback;
    this.$appliactionContainer = $("#applicationContainer");
    this.$appliactionContainer.html(this.template());
    this.cacheElements();
    this.registerEvents();
  };

  this.cacheElements = function() {
    this.$email = $("#email-field");
    this.$password = $("#password-field");
    this.$submit = $("#submit");
  };

  this.registerEvents = function() {
    this.$submit.on("click", this.loginUser);
  };

  this.setCurrentUser = function(responseData) {
    App.currentUser = responseData;
  };

  this.loginUser = function() {
    var request = $.ajax({
      type: 'POST',
      url: App.Settings.productionApiUrl + '/users/sign_in.json',  // need url switching
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
  };

  this.loginSuccess = function(responseData) {
    this.setCurrentUser(responseData);
    this.successCallback();
  };

  this.loginFailure = function() {
    alert("There was a problem, please try again.");
  };
};

App.Login.prototype.template = App.templates.login;
