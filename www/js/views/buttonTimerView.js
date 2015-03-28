App.Views.ButtonTimer = Backbone.View.extend({
  template: App.templates.buttonTimer,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});