App.Views.MenuActivity = Backbone.View.extend({
  template: App.templates.menuActivity,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});