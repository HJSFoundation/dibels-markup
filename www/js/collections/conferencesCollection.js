App.Collections.Conferences = Backbone.Collection.extend({

  model: App.Models.Conference,
  url: App.url+"/classrooms/91/conferences",

  local: App.Config.storageLocalState,

  comparator: "name",

  parse: function(resp, xhr) {
    return resp.conferences;
  }

});
