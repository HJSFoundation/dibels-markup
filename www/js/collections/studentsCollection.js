App.Collections.Students = Backbone.Collection.extend({

  model: App.Models.Student,

  initialize: function(options){
    this.localStorageName = options.localStorageName;
    this.localStorage = new Backbone.LocalStorage(this.localStorageName);
  }
});
