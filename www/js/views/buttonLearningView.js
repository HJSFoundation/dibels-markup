App.Views.ButtonLearning = Backbone.View.extend({
  template: App.templates.buttonLearning,

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
    App.Dispatcher.trigger("buttonAssessmentClicked","learning");
    return false;
  }
});
