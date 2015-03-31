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
    this.$el.replaceWith(this.template({jsClass:this.$el.attr("class")}));
  },

  handleToggleMatrix: function() {
    App.Dispatcher.trigger('toggleMatrix');
  }
});
