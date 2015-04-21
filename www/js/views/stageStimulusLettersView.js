App.Views.StageStimulusLetters = Backbone.View.extend({
  template: App.templates.stageStimulusLetters,

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letters, this.handleSkillChangeRequest);
  },

  render: function(stimulus) {
    this.$el.html(this.template(stimulus));
  },

  handleSkillChangeRequest: function(stimulus) {
    this.render(stimulus);
  },
});
