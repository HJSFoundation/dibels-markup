App.Models.UserReadingStages = Backbone.Model.extend({
  urlRoot: function(){
    return App.url +"/user_reading_stages"
  },

  student_id: null,
  assessor_id: null,
  reading_stage:"",
  context:"teacher_notepad",

  local: App.Config.storageLocalState
});
