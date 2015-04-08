App.Views.StimuliTilesOnsetRime = Backbone.View.extend({
  template: App.templates.stimuliTilesOnsetRime,
  
  initialize: function() {
    _.bindAll(this);
    this.render();

    App.stimuliOnsets.each(function(stimulus){
      new App.Views.Tile({ model: stimulus, el: ".js-stimuliTileOnset"});
    });

    App.stimuliRimes.each(function(stimulus){
      new App.Views.Tile({ model: stimulus, el: ".js-stimuliTileRime"});
    });

  },

  render:  function() {
    this.$el.html(this.template());
  }
});