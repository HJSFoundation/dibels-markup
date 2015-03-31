App.Views.ButtonTimer = Backbone.View.extend({
  template: App.templates.buttonTimer,

  events: {
    'click' : 'handleDisplayTimer'
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  },

  handleDisplayTimer: function() {
    App.Dispatcher.trigger('displayTimer');
  }
});
