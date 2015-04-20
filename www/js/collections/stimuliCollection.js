App.Collections.Stimuli = Backbone.Collection.extend({

  initialize: function(options){
    this.localStorageName = options.localStorageName;
    this.localStorage = new Backbone.LocalStorage(this.localStorageName);
  },

  url: "/stimuli",
  
  model: App.Models.Stimulus
});
