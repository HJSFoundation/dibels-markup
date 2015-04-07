App.Views.StimuliTiles = Backbone.View.extend({
  template: App.templates.stimuliTiles,
  
  initialize: function() {
    _.bindAll(this);
    this.render();

    // convert App.students[x].letters to collection of model stimulus
    // activeStudent.letters.each(function(stimulus))
    App.stimuli.each(function(stimulus){
      new App.Views.Tile({ model: stimulus, el: ".js-stimuliTile"});

    });
  },

  render:  function() {
    this.$el.html(this.template());
  }
});