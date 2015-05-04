App.Views.Stage = Backbone.View.extend({
  template: App.templates.stage,

  flipped: false,

  stageStimulusEl: ".js-stageStimulus",

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.stageStimulusLetterNamesView = new App.Views.StageStimulusLetterNames({ el: this.stageStimulusEl});
    this.stageStimulusLetterSoundsView = new App.Views.StageStimulusLetterSounds({ el: this.stageStimulusEl});
    this.stageStimulusWordsView = new App.Views.StageStimulusWords({ el: this.stageStimulusEl});
    this.stageStimulusPhrasesView = new App.Views.StageStimulusPhrases({ el: this.stageStimulusEl});
    this.storyPageView = new App.Views.StoryPage({ el: ".js-overlay"});

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
  }
});
