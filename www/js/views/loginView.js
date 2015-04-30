App.Views.Login = Backbone.View.extend({
  template: App.templates.login,

  events: {
    "click #submit" : "submit",
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  submit: function(){
    var email = $("#email-field").val();
    var password = $("#password-field").val();
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
        App.currentUser = responseData;
        that.handleLoginSuccess();
      },
      error: function(responseData) {
        alert("There was a problem, please try again.");
        that.handleLoginFailure(responseData);
      }
    });
  },

  handleLoginSuccess: function() {
    App.Dispatcher.trigger("loginSuccess");
  },

  handleLoginFailure: function() {
     // something horrible
  }
});
