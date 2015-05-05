App.Views.MenuActivity = Backbone.View.extend({
  template: App.templates.menuActivity,

  config: {
    buttonMap: {
      letter_names: ["letters", "whiteboard"],
      letter_sounds: ["letters", "words", "whiteboard"],
      sight_words: ["words","phrases","whiteboard"],
      onset_rimes: ["words","phrases","tiles", "whiteboard"],
      cvts: ["words","phrases","tiles", "whiteboard"],
      affixes: ["words","phrases","tiles", "whiteboard"],
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
    this.buttons.whiteboard = new App.Views.ButtonWhiteboard({el: ".js-buttonWhiteboard"});
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
  },

  handleActivityMenuButtonActiveRequest: function(selectedActivity){
    var that = this;
    _.each(this.buttons, function(button, key) {
      if (selectedActivity === key) {
        button.makeActive();
        // App.Dispatcher.trigger("ActivityChangeRequested:" + button.key);
      } else {
        button.makeInactive();
      }
    });
  }
});
