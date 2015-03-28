App.Views.ButtonFlip = Backbone.View.extend({
  template: App.templates.buttonFlip,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});