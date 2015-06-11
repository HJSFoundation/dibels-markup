App.Views.Loading = Backbone.View.extend({
  template: App.templates.loading,

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
