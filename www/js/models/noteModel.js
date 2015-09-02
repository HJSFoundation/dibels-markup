App.Models.Note = Backbone.Model.extend({
  defaults: {
    "content": "",
    "program_type": "teacher_notepad"
  },

  urlRoot: function() {
    return App.url() + "/notes";
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  shortContent: function() {
    var maxChars = 40;
    var content = this.get("content");
    var s = content.slice(0, maxChars);
    if (content.length > maxChars) {
      s = s + "...";
    }
    return s;
  },

  updatedDate: function() {
    var update = moment.utc(this.get("taken_at"));
    return update.format("MMM DD, YYYY");
  },

  parse: function(resp, xhr) {
    if (!resp.note) {
      return resp;
    } else {
      return resp.note;
    }
  }
});
