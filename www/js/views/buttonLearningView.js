App.Views.ButtonLearning = Backbone.View.extend({
  template: App.templates.buttonLearning,

  selectedClass: "",

  events: {
    "click" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function(){
    return {
      selectedClass: this.selectedClass
    }
  },

  makeActive: function(){
    this.selectedClass = "st-selected";
    this.render();
  },

  makeInactive: function(){
    this.selectedClass = "";
    this.render();
  },

  handleClick: function() {
    console.log("buttonLearning clicked");
    App.Dispatcher.trigger("buttonAssessmentClicked","learning");
    return false;
  }

});
