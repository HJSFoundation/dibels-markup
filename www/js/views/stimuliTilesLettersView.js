App.Views.StimuliTilesLetters = Backbone.View.extend({
  template: App.templates.stimuliTilesLetters,
  
  initialize: function() {
    _.bindAll(this);
    this.render();

    App.stimuliLetters.each(function(stimulus){
      new App.Views.Tile({ model: stimulus, el: ".js-stimuliTile"});
    });
  },

  render:  function() {
    this.$el.html(this.template());
  }
});