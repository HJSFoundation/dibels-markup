App.Views.MenuAssessment = Backbone.View.extend({
  template: App.templates.menuAssessment,

  buttons: {},

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listen();
    this.buttons.mastered = new App.Views.ButtonMastered({ el: ".js-buttonMastered" });
    this.buttons.learning = new App.Views.ButtonLearning({ el: ".js-buttonLearning" });
    this.buttons.needs_work = new App.Views.ButtonNeedsWork({ el: ".js-buttonNeedsWork" });
    this.buttons.clear = new App.Views.ButtonClear({ el: ".js-buttonClear" });
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "buttonAssessmentClicked", this.handleButtonAssessmentClicked);
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleButtonAssessmentClicked: function(selectedAssessment) {
    var that = this;
    _.each(this.buttons, function(button,key) {
      if (selectedAssessment === key && App.selectedStimulus !== null) {
        button.makeActive();
      } else {
        that.buttons[key].makeInactive();
      }
    });
  }
});
