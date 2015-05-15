App.Views.Stage = Backbone.View.extend({
  template: App.templates.stage,

  flipped: false,

  stageStimulusEl: ".js-stageStimulus",

  stageViews: {},

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.stageViews.letters = new App.Views.StageStimulusLetters({ el: this.stageStimulusEl});
    this.stageViews.onsetRimesWords = new App.Views.StageStimulusOnsetRimesWords({ el: this.stageStimulusEl});
    this.stageViews.sightWordsWords= new App.Views.StageStimulusSightWordsWords({ el: this.stageStimulusEl});
    this.stageViews.phrases = new App.Views.StageStimulusPhrases({ el: this.stageStimulusEl});
    this.stageViews.whiteboard = new App.Views.StageStimulusWhiteboard({ el: this.stageStimulusEl});
    this.stageStoryPageView = new App.Views.StageStoryPage({ el: ".js-overlay"});
    this.leveledTextPageView = new App.Views.LeveledTextPage({ el: ".js-overlay"});

    this.buttonFlipView = new App.Views.ButtonFlip({el: ".js-stageButtonFlip", eventName: "flipStageButtonTapped"});
    this.buttonTimerView = new App.Views.ButtonTimer({el: ".js-stageButtonTimer"});
    this.buttonManageView = new App.Views.ButtonManage({el: ".js-stageButtonManage"});
    this.menuAssessmentView = new App.Views.MenuAssessment({ el: ".js-menuAssessment"});
    this.menuActivityView = new App.Views.MenuActivity({ el: ".js-menuActivity"});
    this.buttonMatrixOpenView = new App.Views.ButtonMatrixOpen({ el: ".js-buttonMatrixOpen"});
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "closeMatrix", this.handleCloseMatrix);
    this.listenTo(App.Dispatcher, "openMatrix", this.handleOpenMatrix);
    this.listenTo(App.Dispatcher, "flipStageButtonTapped", this.handleFlipStageRequest);


    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.onsetRimes, this.handleOnsetRimesChangeRequest);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.cvts, this.handleOnsetRimesChangeRequest);

    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.sightWords, this.handleSightWordsChangeRequest);

    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.letterSounds, this.handleLetterSoundsChangeRequest);
    this.listenTo(App.Dispatcher, "StageClearRequested" , this.handleStageClearRequest);

  },

  render: function() {
    this.$el.html(this.template());
  },

  handleCloseMatrix: function() {
    this.$el.addClass("stage--workspace--full");
  },

  handleOpenMatrix: function() {
    this.$el.removeClass("stage--workspace--full");
  },

  handleFlipStageRequest: function() {
    var $sel = $(this.stageStimulusEl);
    if (this.flipped) {
      $sel.addClass("st-unflipped");
      $sel.removeClass("st-flipped");
    } else {
      $sel.addClass("st-flipped");
      $sel.removeClass("st-unflipped");
    }
    this.flipped = !this.flipped;
  },

  handleOnsetRimesChangeRequest: function(stimulus_object){
    switch(App.selectedActivity){
      case "words":
        this.stageViews.onsetRimesWords.render(stimulus_object);
        break;
      case "phrases":
        this.stageViews.phrases.render(stimulus_object);
        break;
    }
  },

  handleSightWordsChangeRequest: function(stimulus_object){
    switch(App.selectedActivity){
      case "words":
        this.stageViews.sightWordsWords.render(stimulus_object);
        break;
      case "phrases":
        this.stageViews.phrases.render(stimulus_object);
        break;
    }
  },

  handleLetterSoundsChangeRequest: function(stimulus_object){
    switch(App.selectedActivity){
      case "words":
        this.stageViews.onsetRimesWords.render(stimulus_object);
        break;
      case "letters":
        this.stageViews.letters.render(stimulus_object);
        break;
    }
  },

  handleStageClearRequest: function(){
    $(this.stageStimulusEl).empty();
    App.selectedStimulus = null;
  }
});
