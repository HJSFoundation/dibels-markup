App.Collections.Conferences = Backbone.Collection.extend({
  model: App.Models.Conference,
  url: App.url + "/classrooms/91/conferences",
  comparator: "name",

  local: App.Config.storageLocalState,

  parse: function(resp, xhr) {
    return resp.conferences;
  }
});
