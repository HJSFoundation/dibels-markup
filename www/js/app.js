var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    productionApiUrl: 'https://IFLauthexample-webapp.herokuapp.com',
    developmentApiUrl: 'http://localhost:3000'
  }
};