App.Views.Assessment = Backbone.View.extend({
  template: App.templates.assessments,

  events: {
    "click" : "remove"
  },

  initialize: function() {
    _.bindAll(this);
    $(".js-overlay").html("<div class='js-assessmentOverlay'></div>");
    this.$el = $(".js-assessmentOverlay");
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
