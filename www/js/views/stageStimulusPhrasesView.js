App.Views.StageStimulusPhrases = Backbone.View.extend({
  template: App.templates.stageStimulusPhrases,

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      phrase: this.phrase
    };
  },

  handleSkillChangeRequest: function(stimulus_object) {
    var model = stimulus_object.model;
    var readingStage = model.get("reading_stage");
    var value = model.get("value");
    var subSkill = model.get("sub_skill");

    this.phrase = App.ActivityStimuli.phrasesByStage[readingStage][subSkill][value];
    this.render();
  }
});
