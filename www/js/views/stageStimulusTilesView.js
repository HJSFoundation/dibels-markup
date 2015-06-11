App.Views.StageStimulusTiles = Backbone.View.extend({
  template: App.templates.stageStimulusTiles,

  events: {
    "click li.tile-choice": "handleTileChoiceClick"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    $("ul.js-list").scrollTop(this.scrollPos);
  },

  templateJSON: function() {
    return {
      subSkillClass: this.subSkillClass,
      choices: this.choices,
      onset: this.onset,
      rime: this.rime
    };
  },

  initializeOnsets: function(model) {
    this.subSkillClass = "";
    this.onset = model.get("value");
    this.choices = [];
    var words;
    var readingStage = model.get("reading_stage");
    var value = model.get("value");
    if (readingStage < App.Config.firstStageWithSubSkill) {
      words = App.ActivityStimuli.wordsByStage[readingStage][value];
    } else {
      words = App.ActivityStimuli.wordsByStage[readingStage].onsets[value];
    }
    _.each(words, function(word){
      this.choices.push(word.slice(this.onset.length));
    },this);

    this.choices.sort();
    this.rime = this.choices[0];
  },

  initializeRimes: function(model) {
    this.subSkillClass = "stimulus--tiles--reverse";
    this.rime = model.get("value");
    this.choices = [];
    var words = App.ActivityStimuli.wordsByStage[model.get("reading_stage")].rimes[model.get("value")];
     _.each(words, function(word, key){
       this.choices.push(word.slice(0,-this.rime.length));
     },this);

    this.choices.sort();
    this.onset = this.choices[0];
  },

  isOnsetView: function() {
    return (this.subSkillClass === "");
  },

  handleTileChoiceClick: function(tileChoiceEvent) {
    this.scrollPos = $("ul.js-list").scrollTop();
    var text = tileChoiceEvent.currentTarget.innerText;
    if (this.isOnsetView()) {
      this.rime = text;
    } else {
      this.onset = text;
    }
    this.render();
  },

  handleSkillChangeRequest: function(stimulus_object) {
    if (stimulus_object.model.get("sub_skill") === "onsets"
      || stimulus_object.model.get("skill") === "letter_sounds") {
      this.initializeOnsets(stimulus_object.model);
    } else {
      this.initializeRimes(stimulus_object.model);
    }
    this.scrollPos = 0;
    this.render();
  }
});
