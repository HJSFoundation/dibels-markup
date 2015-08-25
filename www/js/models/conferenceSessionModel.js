App.Models.ConferenceSession = Backbone.Model.extend({
  conference_id: null,
  user_id: null,
  context: "teacher_notepad",
  started_at: "",
  ended_at: "",

  urlRoot: function() {
    return App.url()+ "/conference_sessions";
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if (!resp.conference_session) {
      return resp;
    } else {
      return resp.conference_session;
    }
  }
});
