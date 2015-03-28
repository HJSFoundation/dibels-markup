App.Views.ButtonMastered = Backbone.View.extend({
  template: App.templates.buttonMastered,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});