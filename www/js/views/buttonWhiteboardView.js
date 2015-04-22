App.Views.ButtonWhiteboard = Backbone.View.extend({
  template: App.templates.buttonWhiteboard,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }

});
