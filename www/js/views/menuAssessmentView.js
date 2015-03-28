App.Views.MenuAssessment = Backbone.View.extend({
  template: App.templates.menuAssessment,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.buttonMasteredView = new App.Views.ButtonMastered({ el: ".js-buttonMastered"});
    this.buttonLearningView = new App.Views.ButtonLearning({ el: ".js-buttonLearning"});
    this.buttonNeedsWorkView = new App.Views.ButtonNeedsWork({ el: ".js-buttonNeedsWork"});
    this.buttonClearView = new App.Views.ButtonClear({ el: ".js-buttonClear"});

  },

  render:  function() {
    this.$el.html(this.template());
  }
});