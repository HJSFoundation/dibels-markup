App.Collections.Stimuli = Backbone.Collection.extend({

  url: App.url+"/classrooms/91/stimuli",
  model: App.Models.Stimulus,

  comparator: "value",
  local: App.Config.storageLocalState,
  
  parse: function(resp, xhr) {
    return resp.stimuli;
  }


});
