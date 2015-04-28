var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    el: "#applicationContainer",
    productionApiUrl: 'https://IFLauthexample-webapp.herokuapp.com',
    developmentApiUrl: 'http://localhost:3000',
    maxStudentCount: 6,
    maxStageCount: 9,
    skill: {
      letterNames: "LetterNames",
      letterSounds: "LetterSounds",
      sightWords: "SightWords",
      onsetRimes: "OnsetRimes",
      cvts: "CVts",
      onsets: "Onsets",
      rimes: "Rimes",
      affixes: "Affixes",
      stageStories: "StageStories",
      leveledTexts: "LeveledTexts"
    }
  }

};
