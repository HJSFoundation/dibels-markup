App.Views.StageStimulusWhiteboard = Backbone.View.extend({
  template: App.templates.stageStimulusWhiteboard,

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template());
  }
});
