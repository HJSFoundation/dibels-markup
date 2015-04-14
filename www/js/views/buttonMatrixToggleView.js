App.Views.ButtonMatrixToggle = Backbone.View.extend({
  template: App.templates.buttonMatrixToggle,

  tagName: "a",
  className: "button--matrix-toggle",

  events: {
    'click' : 'handleToggleMatrix'
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  handleToggleMatrix: function() {
    App.Dispatcher.trigger('closeMatrix');
  }
});
