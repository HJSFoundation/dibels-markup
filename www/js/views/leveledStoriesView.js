App.Views.LeveledStories = Backbone.View.extend({
  template: App.templates.leveledStories,

  events: {
    "click" : "remove"
  },

  initialize: function() {
    _.bindAll(this);
    $(".js-overlay").html("<div class='js-leveledStoriesOverlay'></div>");
    this.$el = $(".js-leveledStoriesOverlay");
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
