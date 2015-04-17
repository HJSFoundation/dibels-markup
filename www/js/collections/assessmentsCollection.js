App.Collections.Assessments = Backbone.Collection.extend({

  model: App.Models.Assessment,

  localStorage: new Backbone.LocalStorage("assessments")
});
