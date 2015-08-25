App.Views.StageStimulusLetters = Backbone.View.extend({
  template: App.templates.stageStimulusLetters,

  initialize: function() {
    _.bindAll(this);
  },

  render: function(stimulus_object) {
    stimulus_object.img = stimulus_object.value.toLowerCase();
    this.$el.html(this.template(stimulus_object));
  },

  handleSkillChangeRequest: function(stimulus_object) {
    this.render(stimulus_object);
  }
});
