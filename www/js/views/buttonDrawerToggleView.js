App.Views.ButtonDrawerToggle = Backbone.View.extend({
  template: App.templates.buttonDrawerToggle,
    events: {
    "click" : "handleToggleDrawerRequest",
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleToggleDrawerRequest: function() {
    App.Dispatcher.trigger("toggleDrawerRequest");
    console.log("toggleDrawerRequest");
  }
});
