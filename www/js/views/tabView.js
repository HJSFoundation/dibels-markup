App.Views.Tab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.append(this.template());
  }
});