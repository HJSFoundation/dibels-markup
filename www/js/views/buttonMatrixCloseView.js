App.Views.ButtonMatrixClose = Backbone.View.extend({
  template: App.templates.buttonMatrixClose,

  tagName: "a",
  className: "button--matrix-toggle button--matrix-toggle--close",

  events: {
    'click': 'handleCloseMatrix'
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  handleCloseMatrix: function() {
    App.Dispatcher.trigger('closeMatrix');
  }
});
