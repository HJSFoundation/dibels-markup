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
    this.stageViews.sightWordsWords = new App.Views.StageStimulusSightWordsWords({ el: this.stageStimulusEl});
    this.stageViews.phrases = new App.Views.StageStimulusPhrases({ el: this.stageStimulusEl});
    this.stageViews.tiles = new App.Views.StageStimulusTiles({ el: this.stageStimulusEl});
    this.stageStoryPageView = new App.Views.StageStoryPage({ el: ".js-overlay"});
    this.leveledTextPageView = new App.Views.LeveledTextPage({ el: ".js-overlay"});
    this.stageViews.whiteboard = new App.Views.Whiteboard({ el: this.stageStimulusEl, flipped: this.flipped});


    this.buttonEndSessionView = new App.Views.ButtonEndSession({el: ".js-stageButtonEndSession"});

    this.buttonFlipView = new App.Views.ButtonFlip({el: ".js-stageButtonFlip", eventName: "flipStageButtonTapped"});
    this.buttonTimerView = new App.Views.ButtonTimer({el: ".js-stageButtonTimer"});
    this.timerView0 = new App.Views.Timer({ el: ".js-timer0"});
    this.timerView1 = new App.Views.Timer({ el: ".js-timer1"});

    this.menuAssessmentView = new App.Views.MenuAssessment({ el: ".js-menuAssessment"});
    this.menuActivityView = new App.Views.MenuActivity({ el: ".js-menuActivity"});
    this.buttonMatrixOpenView = new App.Views.ButtonMatrixOpen({ el: ".js-buttonMatrixOpen"});
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "closeMatrix", this.handleCloseMatrix);
    this.listenTo(App.Dispatcher, "openMatrix", this.handleOpenMatrix);
    this.listenTo(App.Dispatcher, "displayOpenMatrixButton", this.handleDisplayOpenMatrixButton);
    this.listenTo(App.Dispatcher, "displayMenuAssessment", this.handleDisplayMenuAssessment);
    this.listenTo(App.Dispatcher, "restoreStage", this.handleRestoreStage);

    this.listenTo(App.Dispatcher, "flipStageButtonTapped", this.handleFlipStageRequest);


    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.onsetRimes, this.handleOnsetRimesChangeRequest);

    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.sightWords, this.handleSightWordsChangeRequest);

    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.letterSounds, this.handleLetterSoundsChangeRequest);

    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.letterNames, this.handleLetterNamesChangeRequest);

    this.listenTo(App.Dispatcher, "StageClearRequested" , this.handleStageClearRequest);
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleRestoreStage: function(){
    this.setFlippedClass();
    this.handleOpenMatrix();
    this.buttonMatrixOpenView.$el.hide();
    this.handleDisplayMenuAssessment(true);
  },

  handleDisplayOpenMatrixButton: function(displayState){
    if(displayState){
      this.buttonMatrixOpenView.$el.show();
    }else{
      this.buttonMatrixOpenView.$el.hide();
    }
  },

  handleDisplayMenuAssessment: function(displayState){
    if(displayState){
      this.menuAssessmentView.$el.show();
    }else{
      this.menuAssessmentView.$el.hide();
    }
  },

  handleCloseMatrix: function() {
    this.$el.addClass("stage--workspace--full");
    if(App.selectedActivity !== "whiteboard"){
      this.handleDisplayOpenMatrixButton(true);
    }
  },

  handleOpenMatrix: function() {
    this.$el.removeClass("stage--workspace--full");
  },

  handleFlipStageRequest: function() {

    this.flipped = !this.flipped;
    if(App.selectedActivity !== "whiteboard"){
      this.setFlippedClass();
    }

    this.stageViews.whiteboard.setFlipped(this.flipped);
  },

  setFlippedClass: function(){
    var $sel = $(this.stageStimulusEl);
    if (!this.flipped) {
      $sel.addClass("st-unflipped");
      $sel.removeClass("st-flipped");
    } else {
      $sel.addClass("st-flipped");
      $sel.removeClass("st-unflipped");
    }
  },

  handleOnsetRimesChangeRequest: function(stimulus_object) {
    switch (App.selectedActivity) {
      case "words":
        this.stageViews.onsetRimesWords.render(stimulus_object);
        break;
      case "phrases":
        this.stageViews.phrases.handleSkillChangeRequest(stimulus_object);
        break;
      case "tiles":
        this.stageViews.tiles.handleSkillChangeRequest(stimulus_object);
        break;
      case "whiteboard":
        this.stageViews.whiteboard.handleSkillChangeRequest(stimulus_object);
        break;
    }
  },

  handleLetterNamesChangeRequest: function(stimulus_object) {
    switch (App.selectedActivity) {
      case "whiteboard":
        this.stageViews.whiteboard.handleSkillChangeRequest(stimulus_object);
        break;
      case "letters":
        this.stageViews.letters.render(stimulus_object);
        break;
    }
  },
  handleSightWordsChangeRequest: function(stimulus_object) {
    switch (App.selectedActivity) {
      case "whiteboard":
        this.stageViews.whiteboard.handleSkillChangeRequest(stimulus_object);
        break;
      case "words":
        this.stageViews.sightWordsWords.render(stimulus_object);
        break;
    }
  },

  handleLetterSoundsChangeRequest: function(stimulus_object) {
    switch (App.selectedActivity) {
      case "words":
        this.stageViews.onsetRimesWords.render(stimulus_object);
        break;
      case "letters":
        this.stageViews.letters.render(stimulus_object);
        break;
      case "tiles":
        this.stageViews.tiles.handleSkillChangeRequest(stimulus_object);
        break;
      case "whiteboard":
        this.stageViews.whiteboard.handleSkillChangeRequest(stimulus_object);
        break;
    }
  },

  handleStageClearRequest: function() {
    $(this.stageStimulusEl).empty();
    App.selectedStimulus = null;
  }
});
