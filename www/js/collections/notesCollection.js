App.Collections.Notes = Backbone.Collection.extend({
  model: App.Models.Note,

  url: function(){
    return App.url + "/classrooms/" + App.loggedInTeacher.classroom_id + "/notes";
  },

  comparator: "updated_at",

  local: App.Config.storageLocalState,

  parse: function(resp, xhr) {
    return resp.notes;
  }
});
