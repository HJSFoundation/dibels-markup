App.Models.Conference = Backbone.Model.extend({
  urlRoot: App.url + "/conferences",

  local: App.Config.storageLocalState
});
