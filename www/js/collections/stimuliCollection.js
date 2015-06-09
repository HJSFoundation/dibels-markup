App.Collections.Stimuli = Backbone.Collection.extend({
  model: App.Models.Stimulus,

  url: function(){
    return App.url + "/classrooms/"+App.loggedInTeacher.classroom_id+"/stimuli"
  },

  comparator: "value",

  local: App.Config.storageLocalState,

  parse: function(resp, xhr) {
    return resp.stimuli;
  }
});
