App.Views.ButtonTiles = Backbone.View.extend({
  template: App.templates.buttonTiles,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
