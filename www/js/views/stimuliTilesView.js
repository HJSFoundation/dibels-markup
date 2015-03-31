App.Views.StimuliTiles = Backbone.View.extend({
  template: App.templates.stimuliTiles,

  config: { tileCount: 55},
  
  initialize: function() {
    _.bindAll(this);
    this.render();
    this.tileViews=[];
    for(var i=0;i<this.config.tileCount;i++){
      this.tileViews[i] = new App.Views.Tile({ el: ".js-stimuliTile"});
    }
  },

  render:  function() {
    this.$el.html(this.template());
  }
});