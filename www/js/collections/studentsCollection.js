App.Collections.Students = Backbone.Collection.extend({
  model: App.Models.Student,

  url: function(){
    return App.url + "/classrooms/" + App.loggedInTeacher.classroom_id + "/students";
  },

  comparator: "first_name",

  local: App.Config.storageLocalState,

  parse: function(resp, xhr) {
    return resp.students;
  }
});
