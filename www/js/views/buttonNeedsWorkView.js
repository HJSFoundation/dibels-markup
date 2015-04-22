App.Views.ButtonNeedsWork = Backbone.View.extend({
  template: App.templates.buttonNeedsWork,

  events: {
    "click" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleClick: function() {
    console.log("buttonMastered clicked");
    App.Dispatcher.trigger("buttonAssessmentClicked","needsWork");
    return false;
  }
});
