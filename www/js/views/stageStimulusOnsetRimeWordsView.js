App.Views.StageStimulusOnsetRimeWords = Backbone.View.extend({
  template: App.templates.stageStimulusOnsetRimesWords,

  initialize: function() {
    _.bindAll(this);
    // this.listen();
  },

  // listen: function() {
  //   this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.onsetRimes, this.handleSkillChangeRequest);
  //   this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.cvts, this.handleSkillChangeRequest);
  // },

  render: function(stimulus_object) {
    this.$el.html(this.template(stimulus_object));
  },

  // handleSkillChangeRequest: function(stimulus_object) {
  //   this.render(stimulus_object);
  // }
});
