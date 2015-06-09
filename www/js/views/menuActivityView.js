App.Views.MenuActivity = Backbone.View.extend({
  template: App.templates.menuActivity,

  config: {
    buttonMap: {
      letter_names: ["letters"],
      letter_sounds: ["letters", "words", "tiles"],
      sight_words: ["words","phrases"],
      onset_rimes: ["words","phrases","tiles"],
      stage_stories: [],
      leveled_texts:[]
    }
  },

  buttons: {},

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.buttons.letters = new App.Views.ButtonLetters({el: ".js-buttonLetters"});
    this.buttons.words = new App.Views.ButtonWords({el: ".js-buttonWords"});
    this.buttons.phrases = new App.Views.ButtonPhrases({el: ".js-buttonPhrases"});
    this.buttons.tiles = new App.Views.ButtonTiles({el: ".js-buttonTiles"});
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "matrixMenuTabActiveRequest", this.handleSkillChangeRequest);
    this.listenTo(App.Dispatcher, "activityMenuButtonActiveRequest", this.handleActivityMenuButtonActiveRequest);
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleSkillChangeRequest: function(tab) {
    var that = this;
    _.each(this.buttons, function(button) {
      button.$el.hide();
    });
    _.each(this.config.buttonMap[tab.key], function(key) {
      that.buttons[key].$el.show();
    });
    var activity;
    if (_.indexOf(this.config.buttonMap[tab.key], App.selectedActivity) === -1) {
      activity = this.config.buttonMap[tab.key][0];
    } else {
      activity = App.selectedActivity;
    }
    this.handleActivityMenuButtonActiveRequest(activity);
  },

  handleActivityMenuButtonActiveRequest: function(selectedActivity){
    var that = this;
    this.isActive = false;
    _.each(this.buttons, function(button, key) {
      if (selectedActivity === key) {
        that.isActive = true;
        button.makeActive();
        App.selectedActivity = selectedActivity;
      } else {
        button.makeInactive();
      }
    });
    if (App.selectedStimulus !== null && (that.isActive) && (App.selectedStudent.get("reading_stage")==App.selectedStimulus.get("reading_stage"))) {
      var skill = App.selectedStimulus.get("skill");
      var value = App.selectedStimulus.get("value");
      App.Dispatcher.trigger("StimulusChangeRequested:" + skill,
        {
          skill: skill,
          value: value,
          model: App.selectedStimulus
        }
      );
    }
  }
});
