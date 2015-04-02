App.Views.Whiteboard = Backbone.View.extend({
  template: App.templates.whiteboard,

  events: {
    "click" : "remove"
  },

  initialize: function() {
    _.bindAll(this);
    $(".js-drawerOverlay").html("<div class='js-whiteboardOverlay'></div>");
    this.$el = $(".js-whiteboardOverlay");
    this.render();
  },

  render:  function() {
    return this.$el.html(this.template());
  }
});
