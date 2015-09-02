App.Views.StageStimulusPhrases = Backbone.View.extend({
  template: App.templates.stageStimulusPhrases,

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {

  this.$el.html(this.template(this.templateJSON()));
  $('.js-flickity-gallery').flickity({
     cellAlign: 'left',
     contain: true,
     prevNextButtons: false,
     pageDots: false
   });
  $(".js-fittext").fitText(1.3);
  },

  templateJSON: function() {
    return {
      phrases: this.phrases
    };
  },

  handleSkillChangeRequest: function(stimulus_object) {
    var model = stimulus_object.model;
    var readingStage = model.get("reading_stage");
    var value = model.get("value");
    var subSkill = model.get("sub_skill");
    this.phrases = App.ActivityStimuli.phrasesByStage[readingStage][subSkill][value];
    this.render();
  }
});
