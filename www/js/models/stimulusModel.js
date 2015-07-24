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
  }
});
