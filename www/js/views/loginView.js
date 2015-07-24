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
          if(localStorage.currentTeacher && that.teachersMatch(responseData) && localStorage.initialSyncCompleted){
            App.currentTeacher = JSON.parse(localStorage.currentTeacher);
          }else{
            localStorage.clear();
            App.database.dropTables();
            App.currentTeacher =  responseData;
          }
          App.currentTeacher.loggedIn = true;
          localStorage.currentTeacher = JSON.stringify(App.currentTeacher);
          that.handleLoginSuccess();
        },
        error: function(responseData ) {
          $("#submit").prop("disabled",false);
          console.log("status code" + responseData.status);
          if(responseData.status===403){
            that.handleLoginCredentialFailure();
          }else{
            alert("We apologize for the inconvenience. There has been an error. Please try to log in again.\n\nError("+responseData.status+")");
          }
        }
      });
    }else{
      alert("Please check your network connection.");
    }

    return false;
  },

  teachersMatch: function(teacher){
    var oldTeacher = JSON.parse(localStorage.currentTeacher);
    return ((oldTeacher.id === teacher.id) && (oldTeacher.email === teacher.email));
  },

  handleLoginSuccess: function() {
    App.Dispatcher.trigger("loginSuccess");
  },

  handleLoginCredentialFailure: function() {
    $('.js-login-error').show();
  },

  handleForgotPassword: function(){
    App.browser = window.open(App.Config.tutormateUrl + "/users/password/new", "_blank", "location=yes");
  }

});
