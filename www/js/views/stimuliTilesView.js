App.Views.StimuliTiles = Backbone.View.extend({
  template: App.templates.stimuliTiles,

  initialize: function() {
    _.bindAll(this);
    this.render();
    
    // this.tileView = new App.Views.Tile({ el: ".js-tile"});


  },

  render:  function() {
    this.$el.html(this.template());
  }
});