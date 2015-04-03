App.Views.StoryPage = Backbone.View.extend({
  template: App.templates.storyPage,

  events:{
    "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.storyImageView = new App.Views.StoryImage({ el: ".js-storyImage"});
    this.storyMenuAssessmentView = new App.Views.MenuAssessment({ el: ".js-storyMenuAssessment"});
    this.storyButtonFlipView = new App.Views.ButtonFlip({el: ".js-storyButtonFlip", cssClass: "story__flip"});
  },

  render:  function() {
    this.$el.html(this.template());
  },

  removeView: function(){
    this.$el.empty();
  }
});
