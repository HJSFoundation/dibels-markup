App.Views.Login = Backbone.View.extend({
  template: App.templates.login,
  events: {
    "click #submit" : "handleLoginSuccess",
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  },

  handleLoginSuccess: function() {
    App.Dispatcher.trigger("loginSuccess");
  }
});
