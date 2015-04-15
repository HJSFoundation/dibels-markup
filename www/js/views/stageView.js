App.Views.Stage = Backbone.View.extend({
  template: App.templates.stage,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.buttonDrawerToggleView = new App.Views.ButtonDrawerToggle({ el: ".js-buttonDrawerToggle"});
    this.drawerView = new App.Views.Drawer({ el: ".js-stageDrawer"});
    this.stageStimulusLettersView = new App.Views.StageStimulusLetters({ el: ".js-stageStimulus"});
    this.stageStimulusWordsView = new App.Views.StageStimulusWords({ el: ".js-stageStimulus"});
    this.stageStimulusPhrasesView = new App.Views.StageStimulusPhrases({ el: ".js-stageStimulus"});
    this.storyPageView = new App.Views.StoryPage({ el: ".js-overlay"});

    this.buttonFlipView = new App.Views.ButtonFlip({el: ".js-stageButtonFlip"});
    this.buttonTimerView = new App.Views.ButtonTimer({el: ".js-stageButtonTimer"});
    this.menuAssessmentView = new App.Views.MenuAssessment({ el: ".js-menuAssessment"});
    this.menuActivityView = new App.Views.MenuActivity({ el: ".js-menuActivity"});
    this.buttonMatrixOpenView = new App.Views.ButtonMatrixOpen({ el: ".js-buttonMatrixOpen"});
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "closeMatrix", this.handleCloseMatrix);
    this.listenTo(App.Dispatcher, "openMatrix", this.handleOpenMatrix);
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleCloseMatrix: function (){
    this.$el.addClass("stage--workspace--full");
  },

  handleOpenMatrix: function (){
    this.$el.removeClass("stage--workspace--full");
  }

});
