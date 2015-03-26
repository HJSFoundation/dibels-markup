App.Views.ButtonDrawerToggle = Backbone.View.extend({
  template: App.templates.buttonDrawerToggle,
    events: {
    "click " : "handleToggleDrawer",
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  },

  handleToggleDrawer: function() {
    App.Dispatcher.trigger("toggleDrawer");
  }

});