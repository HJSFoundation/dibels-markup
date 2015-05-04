App.Views.ButtonMatrixStageDown = Backbone.View.extend({
  template: App.templates.buttonMatrixStageDown,

  tagName: "a",
  className: "button--matrix-toggle",

  events: {
    'click' : 'handleReadingStageDown'
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  handleReadingStageDown: function() {
    // App.Dispatcher.trigger('closeMatrix');
  }
});
