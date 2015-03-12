var IFL = IFL || {};
IFL.Login = {

  initialize: function(callback) {
    _.bindAll(this);
    this.successCallback = callback;
    this.setProductionUrl();
    this.setDevelopmentUrl();
    this.cacheElements();
    this.$gameContainer.hide();
    this.registerEvents();
  },

  setProductionUrl: function() {
    this.productionApiUrl = IFL.Settings.productionApiUrl;
  },

  setDevelopmentUrl: function () {
    this.developmentApiUrl = IFL.Settings.developmentApiUrl;
  },

  cacheElements: function() {
    this.$loginContainer = $("#loginContainer");
    this.$email = $("#email-field");
    this.$password = $("#password-field");
    this.$submit = $("#submit");
    this.$gameContainer = $("#gameContainer");
  },

  registerEvents: function() {
    this.$submit.on("click", this.loginUser);
  },

  setCurrentUser: function(responseData) {
    IFL.currentUser = responseData;
  },

  loginUser: function() {
    var request = $.ajax({
      type: 'POST',
      url: this.productionApiUrl + '/users/sign_in.json',  // need url switching
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
    this.$loginContainer.addClass("hidden");
    this.$gameContainer.removeClass("hidden");
    this.successCallback();
  },

  loginFailure: function() {
    alert("There was a problem, please try again.");
  }
};
