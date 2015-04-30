App.Views.StimuliTilesLeveledTexts = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,

  gridClass: "js-stimuliTilesLeveledTexts",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LeveledTexts", this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:CVts", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:StageStories", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:SightWords", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:OnsetRimes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Affixes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterNames", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterSounds", this.handleSkillReplaceRequest);

    this.listenTo(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", this.handleStudentChangeRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    var i = 0;
    var stimuli = App.stimuli.where({user_id:App.selectedStudent.get('user_id'), reading_stage: App.selectedStudent.get('reading_stage'), skill: App.Config.skill.leveledTexts});
    _.each(stimuli,function(stimulus) {
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus, index: (i += 1) + ". " });
      that.tiles.push(view);
      that.$gridClass.append(view.render().el);
    });
  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  },

  handleSkillChangeRequest: function() {
    this.render();
  },

  handleSkillReplaceRequest: function() {
    _.each(this.tiles, function(tile) {
      tile.remove();
    });
    this.tiles = [];
  },

  handleStudentChangeRequest: function() {
    if(App.selectedSkill === App.Config.skill.leveledTexts) {
      this.handleSkillReplaceRequest();
      this.render();
    }
  }
});
