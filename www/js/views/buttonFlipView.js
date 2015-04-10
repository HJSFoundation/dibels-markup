App.Views.ButtonFlip = Backbone.View.extend({
  template: App.templates.buttonFlip,

  events: {
    'click' : 'handleflipScreen'
  },

  initialize: function(options) {
     this.options = options || {};
   _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template({cssClass: this.options.cssClass, text: this.options.text}));
  },

  handleflipScreen: function() {
    App.Dispatcher.trigger('flipScreenButtonTapped');
  }
});
