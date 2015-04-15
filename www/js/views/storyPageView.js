App.Views.StoryPage = Backbone.View.extend({
  template: App.templates.storyPage,

  events:{
    "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stories, this.handleSkillChangeRequest);
  },

  render: function() {
    this.$el.html(this.template());
    this.storyImageView = new App.Views.StoryImage({ el: ".js-storyImage"});
    this.storyMenuAssessmentView = new App.Views.MenuAssessment({ el: ".js-storyMenuAssessment"});
    this.storyButtonFlipView = new App.Views.ButtonFlip({el: ".js-storyButtonFlip", cssClass: "story__flip"});
  },

  removeView: function() {
    this.$el.empty();
  },

  handleSkillChangeRequest: function(stimulus) {
    this.render(stimulus);
  }
});
