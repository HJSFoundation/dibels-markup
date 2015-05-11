App.Collections.Students = Backbone.Collection.extend({

  model: App.Models.Student,
  url: App.url+"/classrooms/91/students",

  comparator: "first_name",
  
  local: true,

  parse: function(resp, xhr) {
    return resp.students
  }

});
