App.Views.StoryTile = Backbone.View.extend({
  template: App.templates.tile,

  selectedClass: "",

  events: {
    "click" : "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.index = options.index;
    this.title = options.title;
    this.storyType = options.storyType;
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.letterNames, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.letterSounds, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.sightWords, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.onsetRimes, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.cvts, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.affixes, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.stageStories, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.leveledTexts, this.handleStimulusChangeRequested);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      index: this.index,
      stimulusValue: this.title,
      selectedClass: this.selectedClass
    };
  },

  handleClick: function() {
    console.log("StoryTileView.handleClick", "title:", this.title, "skill:", this.storyType);
    App.Dispatcher.trigger("StimulusChangeRequested:" + this.storyType, {skill: this.storyType, index: this.index});
    return false;
  },

  handleStimulusChangeRequested: function(options) {
    if(options.skill === this.storyType){
      if((options.index === this.index)) {
        this.selectedClass = "st-selected";
      }else{
        this.selectedClass = "";
      }
    }
    this.render();
  }
});
