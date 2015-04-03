App.Views.LeveledStories = Backbone.View.extend({
  template: App.templates.leveledStories,

  events: {
    "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  },

  removeView: function() {
    this.$el.empty();
  }
});
