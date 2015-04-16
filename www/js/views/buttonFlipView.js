App.Views.ButtonFlip = Backbone.View.extend({
  template: App.templates.buttonFlip,

  events: {
    'click' : 'handleflipScreen'
  },

  initialize: function(options) {
   _.bindAll(this);
   this.eventName = options.eventName;
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleflipScreen: function() {
    App.Dispatcher.trigger(this.eventName);
    return false;
  }
});
