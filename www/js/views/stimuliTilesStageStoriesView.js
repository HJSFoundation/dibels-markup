App.Views.StimuliTilesStageStories = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,

  gridClass: "js-stimuliTilesStageStories",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],
  stories:[],

  initialize: function() {
    _.bindAll(this);
    this.listen();
    for (var stage = 1; stage <= App.Config.maxStageCount; stage += 1) {
      this.stories[stage] = _.where(App.Stories, { reading_level: App.stageStoryReadingStageMap[stage], story_type: "controlled" });
    }
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.stageStories, this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.leveledTexts, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.sightWords, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.onsetRimes, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.letterNames, this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:" + App.Config.skill.letterSounds, this.handleSkillReplaceRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    var i = 0;
    var stories = this.stories[App.selectedStudent.displayedReadingStage()];
    _.each(stories,function(story) {
      var view = new App.Views.StoryTile({ className: that.tileClass, id: story.content_id, title: story.title, storyType: App.Config.skill.stageStories, index: (i += 1) + ". " });
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
