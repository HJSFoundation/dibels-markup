App.Views.ReadingStage = Backbone.View.extend({
  template: App.templates.readingStage,

  events: {
    "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  removeView: function() {
    this.$el.empty();
    return false;
  }
});
