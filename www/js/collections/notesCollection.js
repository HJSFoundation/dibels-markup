App.Collections.Notes = Backbone.Collection.extend({

  model: App.Models.Note,
  url: App.url+"/classrooms/91/notes",

  comparator: "updated_at",

  local: App.Config.storageLocalState,

  parse: function(resp, xhr) {
    return resp.notes;
  }

});
