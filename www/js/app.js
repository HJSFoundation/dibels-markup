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
      letters: "Letters",
      sightWords: "SightWords",
      onsetRimes: "OnsetRime",
      affixes: "Affixes",
      stories: "Stories"
    }
  }
};
