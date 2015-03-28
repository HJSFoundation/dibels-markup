App.Views.ButtonLearning = Backbone.View.extend({
  template: App.templates.buttonLearning,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});