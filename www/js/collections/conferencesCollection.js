App.Collections.Conferences = Backbone.Collection.extend({
  model: App.Models.Conference,
  url: function(){
    return App.url + "/classrooms/" + App.loggedInTeacher.classroom_id + "/conferences";
  },

  comparator: "name",

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
