App.Views.Application = Backbone.View.extend({
  initialize: function() {
    this.loginView = new App.Views.Login({ el: this.$el });
    this.listen(); 
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  },

  handleLoggedIn: function() {
    this.deviceSelect = new App.Views.DeviceSelect({ el: this.$el});
  }
});
