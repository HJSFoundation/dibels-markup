App.Views.ButtonMatrixReadingStageUp = Backbone.View.extend({
  template: App.templates.buttonMatrixReadingStageUp,

  tagName: "a",
  // className: "",

  events: {
    'click': 'handleReadingStageUpRequest'
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  },

  handleReadingStageUpRequest: function() {
    console.log("ButtonMatrixReadingStageUp.handleReadingStageUpRequest");
    return false;
  }
});
