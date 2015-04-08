App.Views.StageStimulusLetters = Backbone.View.extend({
  template: App.templates.stageStimulusLetters,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
