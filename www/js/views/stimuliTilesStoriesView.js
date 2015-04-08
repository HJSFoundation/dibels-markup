App.Views.StimuliTilesStories = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,
  
  initialize: function() {
    _.bindAll(this);
    this.render();

    App.stimuliStories.each(function(stimulus){
      new App.Views.Tile({ model: stimulus, el: ".js-stimuliTile"});
    });
  },

  render:  function() {
    this.$el.html(this.template());
  }
});