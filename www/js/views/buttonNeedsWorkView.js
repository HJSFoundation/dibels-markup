App.Views.ButtonNeedsWork = Backbone.View.extend({
  template: App.templates.buttonNeedsWork,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
