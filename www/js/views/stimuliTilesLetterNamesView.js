App.Views.StimuliTilesLetterNames = Backbone.View.extend({
  template: App.templates.stimuliTilesLetters,

  gridClass: "js-stimuliTilesLetterNames",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.letterNames, this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.letterSounds, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.sightWords, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.onsetRimes, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.stageStories, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.leveledTexts, this.handleSkillReplaceRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    var stimuli = App.stimuli.where({ user_id: App.selectedStudent.get('id'), reading_stage: App.selectedStudent.displayedReadingStage(), skill: App.Config.skill.letterNames });
    _.each(stimuli,function(stimulus) {
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus });
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
  }
});
