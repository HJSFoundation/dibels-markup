App.Models.Stimulus = Backbone.Model.extend({
  user_id: null,
  value: "",
  reading_stage: 0,
  skill: "",
  assessment: "",

  urlRoot: function() {
    return App.url + "/stimuli";
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  sync: function(method, model, options){
    if (method === "update") {
      App.database.update("stimuli", model);
    }
    return Backbone.sync(method, model, options);
  }
});
