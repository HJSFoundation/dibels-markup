App.Views.ButtonClear = Backbone.View.extend({
  template: App.templates.buttonClear,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});