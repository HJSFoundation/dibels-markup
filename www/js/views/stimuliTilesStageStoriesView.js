App.Views.StimuliTilesStageStories = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,

  gridClass: "js-stimuliTilesStageStories",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.stageStories, this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.cvts, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.leveledTexts, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.sightWords, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.onsetRimes, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.affixes, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.letterNames, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.letterSounds, this.handleSkillReplaceRequest);

  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    var i = 0;
    var stories = App.StageStories[App.selectedStudent.get('reading_stage')];
    _.each(stories,function(story) {
      var view = new App.Views.StoryTile({ className: that.tileClass, title: story.title, storyType: App.Config.skill.stageStories, index: (i += 1) + ". " });
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
