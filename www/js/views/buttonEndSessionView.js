App.Views.ButtonEndSession = Backbone.View.extend({
  template: App.templates.buttonEndSession,

  events: {
    'click': 'handleDisplayEndSession'
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleDisplayEndSession: function() {
    console.log("handleDisplayEndSession");
    App.Dispatcher.trigger("endSessionRequested");
    return false;
  }
});
