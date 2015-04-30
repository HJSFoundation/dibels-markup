App.Collections.Stimuli = Backbone.Collection.extend({

  url: App.url+"/classrooms/91/stimuli",
  model: App.Models.Stimulus,

  initialize: function(options){
    // this.localStorageName = options.localStorageName;
    // this.localStorage = new Backbone.LocalStorage(this.localStorageName);
  },
  parse: function(resp, xhr) {
    return resp.stimuli;
  }


});
