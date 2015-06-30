App.Models.Conference = Backbone.Model.extend({

  urlRoot: function(){
    return App.url +"/conferences";
  },

  local: function(){
    return App.Config.storageLocalState;
  },

  convertDate: function(railsDate){
    var dateTime = railsDate.split("T");
    var date = dateTime[0].split("-");
    var time = dateTime[1].split(":");

    return new Date(date[0],date[1]-1,date[2],time[0],time[1]);
  },

  lastConferenceSessionAt: function(){
    return this.convertDate(this.get("last_conference_session_at"));
  }

});
