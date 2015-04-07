App.Views.StimuliTilesWords = Backbone.View.extend({
  template: App.templates.stimuliTilesWords,
  
  initialize: function() {
    _.bindAll(this);
    this.render();

    App.stimuliWords.each(function(stimulus){
      new App.Views.Tile({ model: stimulus, el: ".js-stimuliTile"});
    });
  },

  render:  function() {
    this.$el.html(this.template());
  }
});