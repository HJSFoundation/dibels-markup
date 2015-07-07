App.Views.Login = Backbone.View.extend({
  template: App.templates.login,

  events: {
    "click #submit": "submit",
    "click #reset": "handleForgotPassword"
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
    var email = $("#email-field").val();
    var password = $("#password-field").val();
    var that = this;

    if(App.isOnline()){
      console.log("login submitted");
      $("#submit").prop("disabled",true);
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
          localStorage.loggedInTeacher = JSON.stringify(App.loggedInTeacher);
          that.handleLoginSuccess();
        },
        error: function(responseData) {
          alert("Should handle network error."); //TODO add network error
          $("#submit").prop("disabled",false);
        },
        statusCode: {
          403: function(responseData) {
            that.handleLoginFailure(responseData);
          },
          404: function() {
            alert( "page not found" );
          },
          500: function() {
            alert( "We apologize, we are experiencing temporary server issues." );
          }
        }
      });
    }else{
      alert("Please check your network connection.");
    }

    return false;
  },

  handleLoginSuccess: function() {
    App.Dispatcher.trigger("loginSuccess");
  },

  handleLoginFailure: function(responseData) {
    $('.js-login-error').show();
  },

  handleForgotPassword: function(){
    App.browser = window.open(App.Config.tutormateUrl + "/users/password/new", "_blank", "location=yes");
  }

});
