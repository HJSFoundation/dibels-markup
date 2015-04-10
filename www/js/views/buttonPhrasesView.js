App.Views.ButtonPhrases = Backbone.View.extend({
  template: App.templates.buttonPhrases,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
