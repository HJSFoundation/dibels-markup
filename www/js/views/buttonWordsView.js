App.Views.ButtonWords = Backbone.View.extend({
  template: App.templates.buttonWords,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
