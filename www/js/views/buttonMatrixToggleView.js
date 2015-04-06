App.Views.ButtonMatrixToggle = Backbone.View.extend({
  template: App.templates.buttonMatrixToggle,

  events: {
    'click' : 'handleToggleMatrix'
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.append(this.template());
  },

  handleToggleMatrix: function() {
    App.Dispatcher.trigger('toggleMatrix');
    console.log("click");
  }
});
