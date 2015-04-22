var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    el: "#applicationContainer",
    productionApiUrl: 'https://IFLauthexample-webapp.herokuapp.com',
    developmentApiUrl: 'http://localhost:3000',
    skill: {
      letterNames: "LetterNames",
      letterSounds: "LetterSounds",
      sightWords: "SightWords",
      onsetRimes: "OnsetRimes",
      onsets: "Onsets",
      rimes: "Rimes",
      affixes: "Affixes",
      stageStories: "StageStories"
    }
  }
};
