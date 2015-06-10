App.Views.StageStimulusOnsetRimesWords = Backbone.View.extend({
  template: App.templates.stageStimulusOnsetRimesWords,

  initialize: function() {
    _.bindAll(this);
  },

  render: function(stimulus_object) {
    var words;
    var readingStage = App.selectedStudent.get("reading_stage");

    if (readingStage < App.Config.firstStageWithSubSkill) {
      words = App.ActivityStimuli.wordsByStage[readingStage][stimulus_object.value];
    } else {
      words = App.ActivityStimuli.wordsByStage[readingStage][stimulus_object.model.get("sub_skill")][stimulus_object.value];
    }

    this.$el.html(this.template({words: words}));
   $('.js-flickity-gallery').flickity({
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });
  }
});
