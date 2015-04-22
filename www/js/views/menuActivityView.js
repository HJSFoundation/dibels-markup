App.Views.MenuActivity = Backbone.View.extend({
  template: App.templates.menuActivity,

  config: {
    buttonMap: {
      LetterNames: ["letters", "whiteboard"],
      LetterSounds: ["letters", "words", "whiteboard"],
      SightWords: ["words","phrases","whiteboard"],
      OnsetRimes: ["words","phrases","tiles", "whiteboard"],
      Affixes: ["words","phrases","tiles", "whiteboard"],
      StageStories: [],
      LeveledTexts:[]
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
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleSkillChangeRequest: function(tab){
    var that=this;
    _.each(this.buttons, function(button){
      button.$el.hide();
    });
    _.each(this.config.buttonMap[tab.key], function(key){
      that.buttons[key].$el.show();
    });
  }
});
