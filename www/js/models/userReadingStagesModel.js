App.Models.UserReadingStage = Backbone.Model.extend({

  defaults: {
    context:"teacher_notepad",
  },

  urlRoot: App.url+"/user_reading_stages",
  student_id: null,
  assessor_id: null,
  reading_stage:"",

  local: App.Config.storageLocalState

});
