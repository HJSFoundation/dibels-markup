App.Views.ButtonMatrixReadingStageUp = Backbone.View.extend({
  template: App.templates.buttonMatrixReadingStageUp,

  tagName: "a",
  // className: "",

  events: {
    'click .js-buttonMatrixReadingStageUp': 'handleReadingStageUpRequest'
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  handleReadingStageUpRequest: function() {
    App.Dispatcher.trigger("readingStageUpRequest");
    return false;
  }
});
