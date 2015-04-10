App.Collections.Students = Backbone.Collection.extend({

  model: App.Models.Student,

  localStorage: new Backbone.LocalStorage("students")
});
