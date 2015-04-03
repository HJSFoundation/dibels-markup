App.Views.Whiteboard = Backbone.View.extend({
  template: App.templates.whiteboard,

  events: {
    "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    return this.$el.html(this.template());
  },

  removeView: function() {
    this.$el.empty();
  }
});
