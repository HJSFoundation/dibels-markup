App.Collections.Students = Backbone.Collection.extend({

  model: App.Models.Student,
  url: App.url+"/classrooms/91/students",

  comparator: "first_name",
  
  parse: function(resp, xhr) {
    return resp.students
  }

});
