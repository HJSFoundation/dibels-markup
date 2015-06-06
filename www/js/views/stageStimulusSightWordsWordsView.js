App.Views.StageStimulusSightWordsWords = Backbone.View.extend({
  template: App.templates.stageStimulusSightWordsWords,

  initialize: function() {
    _.bindAll(this);
  },

  render: function(stimulus_object) {
    this.$el.html(this.template(stimulus_object));
  }
});
