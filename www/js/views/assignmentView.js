App.Views.Assignment = Backbone.View.extend({
  template: App.templates.assignments,

  events: {
    "click" : "remove"
  },

  initialize: function() {
    _.bindAll(this);
    $(".js-drawerOverlay").html("<div class='js-assignmentOverlay'></div>");
    this.$el = $(".js-assignmentOverlay");
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
