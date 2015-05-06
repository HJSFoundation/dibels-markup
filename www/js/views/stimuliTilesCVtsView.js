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
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.cvts, this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.onsetRimes, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.letterNames, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.letterSounds, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.sightWords, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.affixes, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.stageStories, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.leveledTexts, this.handleSkillReplaceRequest);

  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    var that = this;
    this.$gridClass = $("." + this.gridClassOnset);
    var onsetStimuli = App.stimuli.where({user_id:App.selectedStudent.get('id'), reading_stage: App.selectedStudent.get('reading_stage'), skill: App.Config.skill.cvts, sub_skill: App.Config.skill.onsets});
    _.each(onsetStimuli,function(stimulus) {
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.tiles.push(view);
      that.$gridClass.append(view.render().el);
    });

    var rimeStimuli = App.stimuli.where({user_id:App.selectedStudent.get('id'), reading_stage: App.selectedStudent.get('reading_stage'), skill: App.Config.skill.cvts, sub_skill: App.Config.skill.rimes});
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
  }

});
