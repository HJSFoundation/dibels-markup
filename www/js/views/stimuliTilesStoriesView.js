App.Views.StimuliTilesStories = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,
  
  initialize: function() {
    _.bindAll(this);
    this.render();

    var i=1;
    App.stimuliStories.each(function(stimulus){
      new App.Views.Tile({ model: stimulus, el: ".js-stimuliTile", index: (i++)+". "});
    });
  },

  render:  function() {
    this.$el.html(this.template());
  }
});