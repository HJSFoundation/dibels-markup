App.Models.ConferenceSession = Backbone.Model.extend({

  "conference_id":null,
  "user_id":null,
  "classroom_id":null,
  "context": "teacher_notepad",
  "started_at":"",
  "ended_at":"",


  urlRoot: function(){
    return App.url +"/conference_sessions";
  },

  parse: function(resp, xhr) {
    this.set({id:  resp.conference_session.id});
  },

  local: App.Config.storageLocalState
});
