App.Views.Application = Backbone.View.extend({
  initialize: function() {
    this.loginView = new App.Views.Login();
    $(App.Config.el).append(this.loginView.render().el);

    this.listen(); 
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  },

  handleLoggedIn: function() {
    this.deviceSelect = new App.Views.DeviceSelect();
    $(App.Config.el).append(this.deviceSelect.render().el);
    this.loginView.remove();
  }
});
