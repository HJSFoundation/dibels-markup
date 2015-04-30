App.Collections.Students = Backbone.Collection.extend({

  model: App.Models.Student,
  url: App.url+"/classrooms/91/students",

  initialize: function(options){
    // this.localStorageName = options.localStorageName;
    // this.localStorage = new Backbone.LocalStorage(this.localStorageName);
  },
  parse: function(resp, xhr) {
    return resp.students
  }

});
