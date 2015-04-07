App.Collections.Stimuli = Backbone.Collection.extend({

  model: App.Models.Stimulus,

  localStorage: new Backbone.LocalStorage("stimuli")

});

