App.Views.StimuliTilesCVts = Backbone.View.extend({
  template: App.templates.stimuliTilesOnsetRimes,

  gridClassOnset: "js-stimuliTileOnset",
  gridClassRime: "js-stimuliTileRime",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],


  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:CVts", this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:OnsetRimes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterNames", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterSounds", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:SightWords", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Affixes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:StageStories", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LeveledTexts", this.handleSkillReplaceRequest);

    this.listenTo(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", this.handleStudentChangeRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    var that = this;
    this.$gridClass = $("." + this.gridClassOnset);
    var onsetStimuli = App.stimuli.where({studentId:App.selectedStudent.get('id'), skill: App.Config.skill.cvts, subSkill: App.Config.skill.onsets});
    _.each(onsetStimuli,function(stimulus) {
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.tiles.push(view);
      that.$gridClass.append(view.render().el);
    });

    var rimeStimuli = App.stimuli.where({studentId:App.selectedStudent.get('id'), skill: App.Config.skill.cvts, subSkill: App.Config.skill.rimes});
    this.$gridClass = $("." + this.gridClassRime);
    _.each(rimeStimuli,function(stimulus) {
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.tiles.push(view);
      that.$gridClass.append(view.render().el);
    });
  },

  templateJSON: function() {
    return {
      jsClassOnset: this.gridClassOnset,
      jsClassRime: this.gridClassRime,
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
    if(App.selectedSkill === App.Config.skill.cvts) {
      this.handleSkillReplaceRequest();
      this.render();
    }
  }
});
