App.Views.StoryPage = Backbone.View.extend({
  template: App.templates.storyPage,

  events:{
    "click" : "remove"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.storyImageView = new App.Views.StoryImage({ el: ".js-storyImage"});
    this.storyMenuAssessmentView = new App.Views.MenuAssessment({ el: ".js-storyMenuAssessment"});
    this.storyButtonFlipView = new App.Views.ButtonFlip({el: ".js-storyButtonFlip"});

  },

  render:  function() {
    this.$el.html(this.template());
  },
});
