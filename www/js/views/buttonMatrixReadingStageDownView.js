App.Views.ButtonMatrixReadingStageDown = Backbone.View.extend({
  template: App.templates.buttonMatrixReadingStageDown,

  tagName: "a",

  events: {
    'click .js-buttonMatrixReadingStageDown': 'handleReadingStageDownRequest'
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  handleReadingStageDownRequest: function() {
    App.Dispatcher.trigger("readingStageDownRequest");
    return false;
  }
});
