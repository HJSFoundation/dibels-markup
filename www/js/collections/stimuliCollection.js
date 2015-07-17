App.Collections.Stimuli = Backbone.Collection.extend({
  model: App.Models.Stimulus,

  page: 1,
  currentResponseLength:0,

  url: function(){
    var url = App.url + "/classrooms/"+App.currentTeacher.classroom_id+"/stimuli?page="+this.page;

    if(App.clientLastFetchedAt){
      url = url + "&client_last_fetched_at="+App.clientLastFetchedAt;
    }
    return url;
  },

  storeName: "App.stimuli",

  comparator: "value",

  local: function(){
    return App.Config.storageLocalState;
  },

  isComplete: function(){
    return (this.currentResponseLength === 0);
  },

  isError: function(){
    return (this.page > 1000);
  },

  initializeFetch:function(){
    this.page=1;
    App.resp.stimuli=[];
  },

  parse: function(resp, xhr) {
    if(this.local()){
      App.resp.stimuli = [];
      return resp;
    }else{
      this.currentResponseLength = resp.stimuli.length;
      App.resp.stimuli = App.resp.stimuli.concat(resp.stimuli);
      this.page += 1;
      return resp.stimuli;
    }
  }
});
