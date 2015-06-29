App.Collections.Conferences = Backbone.Collection.extend({
  model: App.Models.Conference,
  url: function(){
    return App.url + "/classrooms/" + App.loggedInTeacher.classroom_id + "/conferences";
  },

  comparator: function(model){
    var msPerDay = 1000*60*60*24;
    var date1 = model.lastConferenceSessionAt();
    var date2 = new Date();
    var timeSinceLastConference = Math.abs(date2.getTime() - date1.getTime());
    var desiredTimeBetweenConf = 7*msPerDay/model.get("number_per_week");
    return desiredTimeBetweenConf - timeSinceLastConference;
  },

  local: function(){
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if(this.local()){
      return resp;
    }else{
      return resp.conferences;
    }
  }

});
