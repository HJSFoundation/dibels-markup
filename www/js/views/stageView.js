App.Views.Stage = Backbone.View.extend({
  template: App.templates.stage,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.buttonDrawerToggleView = new App.Views.ButtonDrawerToggle({ el: ".js-buttonDrawerToggle"});
    this.drawerView = new App.Views.Drawer({ el: ".js-stageDrawer"});
    // this.stageStimulusView = new App.Views.StageStimulusLetters({ el: ".js-stageStimulus"});
    this.stageStimulusView = new App.Views.StageStimulusWords({ el: ".js-stageStimulus"});
    this.buttonFlipView = new App.Views.ButtonFlip({el: ".js-stageButtonFlip", text:"Flip"});
    this.buttonTimerView = new App.Views.ButtonTimer({el: ".js-stageButtonTimer"});
    this.menuAssessmentView = new App.Views.MenuAssessment({ el: ".js-menuAssessment"});
    this.menuActivityView = new App.Views.MenuActivity({ el: ".js-menuActivity"});
  },

  render:  function() {
    this.$el.html(this.template());
  },
});
