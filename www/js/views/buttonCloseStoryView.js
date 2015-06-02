App.Views.ButtonCloseStory = Backbone.View.extend({
  template: App.templates.buttonCloseStory,

  events: {
    'click' : 'handleClick'
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleClick: function() {
    App.Dispatcher.trigger("CloseStoryPage");
    return false;
  }
});
