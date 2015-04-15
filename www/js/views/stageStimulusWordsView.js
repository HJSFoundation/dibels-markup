App.Views.StageStimulusWords = Backbone.View.extend({
  template: App.templates.stageStimulusWords,

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.sightWords, this.handleSkillChangeRequest);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.onsetRimes, this.handleSkillChangeRequest);
  },

  render: function(stimulus) {
    this.$el.html(this.template(stimulus));
  },

  handleSkillChangeRequest: function(stimulus) {
    this.render(stimulus);
  }
});
