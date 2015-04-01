App.Views.Story = Backbone.View.extend({
  template: App.templates.story,

  events:{
    "click" : "remove"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.storyImageView = new App.Views.StoryImage({ el: ".js-storyImage"});
    this.storyMenuAssessmentView = new App.Views.MenuAssessment({ el: ".js-storyMenuAssessment"});
  },

  render:  function() {
    this.$el.html(this.template());
  },
});
