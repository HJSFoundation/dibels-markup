App.Views.ButtonMatrixStageUp = Backbone.View.extend({
  template: App.templates.buttonMatrixStageUp,

  tagName: "a",
  className: "button--matrix-toggle",

  events: {
    'click' : 'handleReadingStageUp'
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  handleReadingStageUp: function() {
    // App.Dispatcher.trigger('closeMatrix');
  }
});
