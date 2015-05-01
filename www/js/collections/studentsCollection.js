App.Collections.Students = Backbone.Collection.extend({

  model: App.Models.Student,
  url: App.url+"/classrooms/91/students",

  parse: function(resp, xhr) {
    return resp.students
  }

});
