App.Views.ReadingStage = Backbone.View.extend({
  template: App.templates.readingStage,

  events: {
    "click ": "exit"
  },

  initialize: function() {
    _.bindAll(this);
    $(".overlay").html("<div class='js-reading-stage-overlay'></div>");
    this.$el = $(".js-reading-stage-overlay");
    // this.setElement(".js-reading-stage");
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  },

  exit: function (){
    this.remove();
  }

});