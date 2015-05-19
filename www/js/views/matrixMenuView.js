App.Views.MatrixMenu = Backbone.View.extend({
  template: App.templates.matrixMenu,

  gridClass: "js-matrixMenuTabs",

  tabDefs: {
    letterNames: { label: "LETTER NAMES", key: App.Config.skill.letterNames},
    letterSounds: { label: "CONSONANT SOUNDS", key: App.Config.skill.letterSounds},
    sightWords: { label: "SIGHT WORDS", key: App.Config.skill.sightWords},
    onsetRimes: { label: "ONSETS & RIMES", key: App.Config.skill.onsetRimes},
    cvts: { label: "CVT WORDS", key: App.Config.skill.cvts},
    affixes: { label: "AFFIXES", key: App.Config.skill.affixes},
    stageStories: { label: "STAGE STORIES", key: App.Config.skill.stageStories},
    leveledTexts: { label: "LEVELED TEXTS", key: App.Config.skill.leveledTexts}
  },

  tabViews: {},

  initialize: function() {
    _.bindAll(this);

    this.tabsByStage = {
      "1":[this.tabDefs.letterNames, this.tabDefs.leveledTexts],
      "2":[this.tabDefs.letterSounds, this.tabDefs.leveledTexts],
      "3":[this.tabDefs.cvts, this.tabDefs.leveledTexts],
      "4":[this.tabDefs.sightWords, this.tabDefs.onsetRimes, this.tabDefs.stageStories, this.tabDefs.leveledTexts],
      "5":[this.tabDefs.sightWords, this.tabDefs.onsetRimes, this.tabDefs.stageStories, this.tabDefs.leveledTexts],
      "6":[this.tabDefs.sightWords, this.tabDefs.onsetRimes, this.tabDefs.stageStories, this.tabDefs.leveledTexts],
      "7":[this.tabDefs.sightWords, this.tabDefs.onsetRimes, this.tabDefs.stageStories, this.tabDefs.leveledTexts],
      "8":[this.tabDefs.sightWords, this.tabDefs.onsetRimes, this.tabDefs.affixes, this.tabDefs.leveledTexts],
      "9":[this.tabDefs.sightWords, this.tabDefs.onsetRimes, this.tabDefs.affixes, this.tabDefs.leveledTexts]
    };

    this.render();
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "matrixMenuTabActiveRequest", this.handleMatrixMenuTabActiveRequest);
    this.listenTo(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", this.handleMatrixStudentSelectorTabActiveRequest);
  },

  render: function() {

    var that = this;

    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);

    _.each(this.tabViews, function(tabView) {
      tabView.remove();
    });

    this.tabViews = {};

    _.each(this.activeTabDefs, function(tab) {
      var options = {
        label: tab.label,
        key: tab.key
      };
      var view = that.tabViews[tab.key] = new App.Views.MatrixMenuTab(options);
      that.$gridClass.append(view.render().el);
    });

  // BUTTONS THAT MOVE READING STAGE UP AND DOWN
    // this.stageUpTab = new App.Views.ButtonMatrixStageUp();
    // this.stageDownTab = new App.Views.ButtonMatrixStageDown();
    // this.$gridClass.append(this.stageDownTab.render().el);
    // this.$gridClass.append(this.stageUpTab.render().el);
    this.closeTab = new App.Views.ButtonMatrixClose();
    this.$gridClass.append(this.closeTab.render().el);
  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  },

  selectedSkillAvailable: function(){
    var that = this;
    this.returnValue = false;
    _.each(this.activeTabDefs, function (tab) {
      if (tab.key === App.selectedSkill) {
        that.returnValue = true;
        return false;
      }
    });
    return this.returnValue;
  },

  handleMatrixMenuTabActiveRequest: function(selectedTab) {
    var that = this;
    App.selectedStimulus = null;
    _.each(this.activeTabDefs, function(tab) {
      if (selectedTab.label === tab.label) {
        selectedTab.makeActive();
        App.selectedSkill = tab.key;
        App.Dispatcher.trigger("StageClearRequested");
        App.Dispatcher.trigger("SkillChangeRequested:" + tab.key);
      } else {
        that.tabViews[tab.key].makeInactive();
      }
    });
  },

  handleMatrixStudentSelectorTabActiveRequest: function() {
    var studentReadingStage = App.selectedStudent.get("reading_stage");
    this.activeTabDefs = this.tabsByStage[studentReadingStage];
    this.render();

    if (this.selectedSkillAvailable()) {
      App.Dispatcher.trigger("matrixMenuTabActiveRequest", this.tabViews[App.selectedSkill]);
    } else {
      App.Dispatcher.trigger("matrixMenuTabActiveRequest", this.tabViews[this.activeTabDefs[0].key]);
    }
  }
});
