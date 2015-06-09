App.Views.Login = Backbone.View.extend({
  template: App.templates.login,

  events: {
    "click #submit": "submit",
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  submit: function() {
    console.log("login submitted");
    var email = $("#email-field").val();
    var password = $("#password-field").val();
    this.displayLoadingScreen();
    var that = this;

    $.ajax({
      type: 'POST',
      url: App.url + '/sign_in',
      crossDomain: true,
      data: {
        email: email,
        password: password
      },
      dataType: 'json',
      success: function(responseData) {
        console.log(responseData);
        App.loggedInTeacher = responseData;
        that.handleLoginSuccess();
      },
      error: function(responseData) {
        alert("Should handle network error."); //TODO add network error
        that.handleLoginFailure(responseData);
      }
    });
    return false;
  },

  displayLoadingScreen: function(){
    this.loadingScreen = new App.Views.Loading({el: App.Config.el});
  },

  handleLoginSuccess: function() {
    App.Dispatcher.trigger("loginSuccess");
  },

  handleLoginFailure: function() {
    $('.js-login-error').show();
  }
});
