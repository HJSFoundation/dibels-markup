App.Collections.Stimuli = Backbone.Collection.extend({

  url: App.url+"/classrooms/91/stimuli",
  model: App.Models.Stimulus,

  parse: function(resp, xhr) {
    return resp.stimuli;
  }


});
