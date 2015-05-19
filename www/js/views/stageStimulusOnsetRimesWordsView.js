App.Views.StageStimulusOnsetRimesWords = Backbone.View.extend({
  template: App.templates.stageStimulusOnsetRimesWords,

  initialize: function() {
    _.bindAll(this);
  },

  render: function(stimulus_object) {
    var words=App.ActivityStimuli.wordsByStage[App.selectedStudent.get("reading_stage")][stimulus_object.value];
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
