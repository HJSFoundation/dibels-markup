App.Views.ButtonFlip = Backbone.View.extend({
  template: App.templates.buttonFlip,

  events: {
    'click' : 'handleflipScreen'
  },

  initialize: function() {
   _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleflipScreen: function() {
    App.Dispatcher.trigger('flipScreenButtonTapped');
  }

});
