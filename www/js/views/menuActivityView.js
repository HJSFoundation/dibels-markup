App.Views.MenuActivity = Backbone.View.extend({
  template: App.templates.menuActivity,

  config: {
    buttonMap: {
      letter_names: ["letters", "whiteboard"],
      letter_sounds: ["letters", "words", "tiles", "whiteboard"],
      sight_words: ["words", "whiteboard"],
      onset_rimes: ["words","phrases","tiles", "whiteboard"],
      stage_stories: [],
      leveled_texts:[]
    }
  },

  buttons: {},

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.buttons.letters = new App.Views.ButtonLetters({ el: ".js-buttonLetters" });
    this.buttons.words = new App.Views.ButtonWords({ el: ".js-buttonWords" });
    this.buttons.phrases = new App.Views.ButtonPhrases({ el: ".js-buttonPhrases" });
    this.buttons.tiles = new App.Views.ButtonTiles({ el: ".js-buttonTiles" });
    this.buttons.whiteboard = new App.Views.ButtonWhiteboard({ el: ".js-buttonWhiteboard" });
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

  handleActivityMenuButtonActiveRequest: function(selectedActivity) {
    var that = this;
    this.isActive = false;
    if (( App.selectedActivity === "whiteboard") && ( selectedActivity !== "whiteboard")) {
      App.Dispatcher.trigger("restoreStage");
    }

    var oldSelectedActivity = App.selectedActivity;
    _.each(this.buttons, function(button, key) {
      if (selectedActivity === key) {
        that.isActive = true;
        button.makeActive();
        App.selectedActivity = selectedActivity;
      } else {
        button.makeInactive();
      }
    });

    if (((oldSelectedActivity === "phrases") || (selectedActivity === "phrases"))) {
      App.Dispatcher.trigger("matrixRerenderRequest");
    }

    if (App.selectedStimulus !== null && (that.isActive) && (App.selectedStudent.displayedReadingStage() == App.selectedStimulus.get("reading_stage"))) { //intentional == not ===
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
