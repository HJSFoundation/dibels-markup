App.Collections.Stimuli = Backbone.Collection.extend({
  model: App.Models.Stimulus,

  url: function(){
    var url = App.url + "/classrooms/"+App.loggedInTeacher.classroom_id+"/stimuli";

    if(App.clientLastFetchedAt){
      url = url + "?client_last_fetched_at="+App.clientLastFetchedAt;
    }
    return url;
  },

  storeName: "App.stimuli",

  comparator: "value",

  local: function(){
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if(this.local()){
      App.resp.stimuli = [];
      return resp;
    }else{
      App.resp.stimuli = resp.stimuli;
      return resp.stimuli;
    }
  }
});
