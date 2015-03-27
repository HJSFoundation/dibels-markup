App.Views.Matrix = Backbone.View.extend({
  template: App.templates.matrix,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
