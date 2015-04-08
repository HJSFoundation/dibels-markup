App.Views.StageStimulusWords = Backbone.View.extend({
  template: App.templates.stageStimulusWords,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
