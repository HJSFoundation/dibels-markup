App.Models.Stimulus = Backbone.Model.extend({
  urlRoot: App.url+"/stimuli",
  user_id: null,
  value: "",
  reading_stage: 0,
  skill: "",
  assessment: "",

  local: App.Config.storageLocalState

});
