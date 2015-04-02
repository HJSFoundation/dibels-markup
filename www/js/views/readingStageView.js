App.Views.ReadingStage = Backbone.View.extend({
  template: App.templates.readingStage,

  events: {
    "click" : "remove"
  },

  initialize: function() {
    _.bindAll(this);
    $(".js-drawerOverlay").html("<div class='js-readingStageOverlay'></div>");
    this.$el = $(".js-readingStageOverlay");
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
