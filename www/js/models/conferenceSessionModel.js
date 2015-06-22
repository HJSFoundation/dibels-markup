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

  local: function(){
    return App.Config.storageLocalState;
  },


  parse: function(resp, xhr) { //TODO examine converting parse function to new parse function syntax
    if(!resp.conference_session){
      this.set({id:  resp.id});
    }else{
      this.set({id:  resp.conference_session.id});
    }
  },

});
