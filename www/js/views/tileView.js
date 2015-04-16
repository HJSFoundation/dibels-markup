App.Views.Tile = Backbone.View.extend({
  template: App.templates.tile,

  events: {
    "click" : "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.index = options.index;
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letters, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.sightWords, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.onsetRimes, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.affixes, this.handleStimulusChangeRequested);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stories, this.handleStimulusChangeRequested);

  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      index: this.index,
      stimulus: this.model.get("stimulus")
    };
  },

  handleClick: function() {
    console.log(this.model.get('stimulus'));
    App.Dispatcher.trigger("StimulusChangeRequested:"+this.model.get("skill"), {stimulus: this.model.get("stimulus")});
  },

  handleButtonAssessmentClicked: function(assessment){

    switch(assessment){
      case "Mastered":
      this.$el.css("background-color","green");
      break;
      case "Learning":
      this.$el.css("background-color","yellow");
      break;
      case "NeedsWork":
      this.$el.css("background-color","red");
      break;
      case "Clear":
      this.$el.css("background-color","");
      break;
    }
    console.log(this.model.get("stimulus"));
  },

  handleStimulusChangeRequested: function(options){
    if(options.stimulus === this.model.get("stimulus")){
      this.listenTo(App.Dispatcher, "buttonAssessmentClicked", this.handleButtonAssessmentClicked);
    }else{
      this.stopListening(App.Dispatcher, "buttonAssessmentClicked");
    }
  }
});
