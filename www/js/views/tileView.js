App.Views.Tile = Backbone.View.extend({
  template: App.templates.tile,

  selectedClass: "",

  events: {
    "click" : "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.index = options.index;
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letterNames, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letterSounds, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.sightWords, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.onsetRimes, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.affixes, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stageStories, this.handleStimulusChangeRequested);

  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      index: this.index,
      stimulus: this.model.get("stimulus"),
      assessmentClass: "st-"+this.model.get("assessment"),
      selectedClass: this.selectedClass
    };
  },

  setAssessment: function(assessment){
    this.model.set("assessment", assessment);
    this.model.save({assessment: assessment});
    this.render();
    console.log("TileView.setAssessment", "stimulus:", this.model.get("stimulus"), "skill:", this.model.get("skill"));
  },

  handleClick: function() {
    console.log("TileView.handleClick", "stimulus:", this.model.get("stimulus"), "skill:", this.model.get("skill"));
    App.Dispatcher.trigger("StimulusChangeRequested:"+this.model.get("skill"), {skill: this.model.get("skill"), stimulus: this.model.get("stimulus")});
  },

  handleButtonAssessmentClicked: function(assessment){
    this.setAssessment(assessment);
  },

  handleStimulusChangeRequested: function(options){
    if((options.stimulus === this.model.get("stimulus"))&&(options.skill === this.model.get("skill"))){
      this.selectedClass = "st-selected";
      this.listenTo(App.Dispatcher, "buttonAssessmentClicked", this.handleButtonAssessmentClicked);
    }else{
      this.selectedClass = "";
      this.stopListening(App.Dispatcher, "buttonAssessmentClicked");
    }
    this.render();
  }
});
