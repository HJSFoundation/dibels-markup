App.Views.StageStimulusOnsetRimesWords = Backbone.View.extend({
  template: App.templates.stageStimulusOnsetRimesWords,

  initialize: function() {
    _.bindAll(this);
  },

  render: function(stimulus_object) {
    var words;
    var readingStage = App.selectedStudent.get("reading_stage");
    var firstStageWithSubSkill = 3;

    if(readingStage < firstStageWithSubSkill){
      words = App.ActivityStimuli.wordsByStage[readingStage][stimulus_object.value];
    }else{
      words = App.ActivityStimuli.wordsByStage[readingStage][stimulus_object.model.get("sub_skill")][stimulus_object.value];
    }

    this.$el.html(this.template({words: words}));
   $('.stage__stimulus__gallery').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

  }

});
