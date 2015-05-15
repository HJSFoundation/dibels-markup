App.Views.StoryImage = Backbone.View.extend({
  template: App.templates.storyImage,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      image: "dentist1",
      lines: "this is some text.\nthis is the second line"
    }
  }
});
