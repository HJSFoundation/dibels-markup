App.Models.Conference = Backbone.Model.extend({

  urlRoot: function(){
    return App.url +"/conferences";
  },

  local: function(){
    return App.Config.storageLocalState;
  },

  lastConferenceSessionAt: function(){
    return moment.utc(this.get("last_conference_session_at") ? this.get("last_conference_session_at") : [2015, 6, 01]); // TODO change date for null to August 1
  }

});
