App.Views.StoryPage = Backbone.View.extend({
  template: App.templates.storyPage,

  storyStimulusEl: ".js-storyFlip",

  events:{
    "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stories, this.handleSkillChangeRequest);
    this.listenTo(App.Dispatcher, "flipStoryButtonTapped", this.handleFlipStoryRequest);
  },

  render: function() {
    this.$el.html(this.template());
    this.storyImageView = new App.Views.StoryImage({ el: ".js-storyImage"});
    this.storyMenuAssessmentView = new App.Views.MenuAssessment({ el: ".js-storyMenuAssessment"});
    this.storyButtonFlipView = new App.Views.ButtonFlip({el: ".js-storyButtonFlip", eventName: "flipStoryButtonTapped"});
  },

  removeView: function() {
    this.$el.empty();
  },

  handleSkillChangeRequest: function(stimulus) {
    this.render(stimulus);
  },

  handleFlipStoryRequest: function() {
    var $sel = $(this.storyStimulusEl);
    if (this.flipped) {
      $sel.addClass("st-unflipped");
      $sel.removeClass("st-flipped");
      $(".js-storyTextTeacher").hide();
    } else {
      $sel.addClass("st-flipped");
      $sel.removeClass("st-unflipped");
      $(".js-storyTextTeacher").show();
    }
    this.flipped = !this.flipped;
  }

});
