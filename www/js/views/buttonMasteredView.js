App.Views.ButtonMastered = Backbone.View.extend({
  template: App.templates.buttonMastered,

  selectedClass: "",

  events: {
    "click": "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      selectedClass: this.selectedClass
    };
  },

  makeActive: function() {
    this.selectedClass = "st-selected";
    this.render();
  },

  makeInactive: function() {
    this.selectedClass = "";
    this.render();
  },

  handleClick: function() {
    App.Dispatcher.trigger("buttonAssessmentClicked", "mastered");
    return false;
  }
});
