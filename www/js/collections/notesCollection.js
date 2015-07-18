App.Collections.Notes = Backbone.Collection.extend({
  model: App.Models.Note,
  storeName: "App.notes",
  comparator: "taken_at",

  url: function() {
    var url =  App.url + "/classrooms/" + App.currentTeacher.classroom_id + "/notes";
    if (App.notesLastTakenAt) {
      url = url + "?taken_at=" + App.notesLastTakenAt;
    }
    return url;
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if (this.local()) {
      App.resp.notes = [];
      return resp;
    } else {
      App.resp.notes = resp.notes;
      return resp.notes;
    }
  }
});
