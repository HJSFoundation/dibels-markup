App.Models.UserReadingStages = Backbone.Model.extend({
  student_id: null,
  assessor_id: null,
  reading_stage: "",
  context: "teacher_notepad",

  urlRoot: function() {
    return App.url()+ "/user_reading_stages";
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if (!resp.user_reading_stages) {
      return resp;
    } else {
      return resp.user_reading_stages;
    }
  }
});
