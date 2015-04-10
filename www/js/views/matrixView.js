App.Views.Matrix = Backbone.View.extend({
  template: App.templates.matrix,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.matrixMenuView = new App.Views.MatrixMenu({ el: ".js-matrixMenu"});
    this.stimuliTilesView = new App.Views.StimuliTilesLetters({ el: ".js-stimuliTiles"});
    // this.stimuliTilesView = new App.Views.StimuliTilesSightWords({ el: ".js-stimuliTiles"});
    // this.stimuliTilesView = new App.Views.StimuliTilesOnsetRime({ el: ".js-stimuliTiles"});
    // this.stimuliTilesView = new App.Views.StimuliTilesStories({ el: ".js-stimuliTiles"});
    this.matrixStudentSelectorView = new App.Views.MatrixStudentSelector({ el: ".js-matrixStudentSelector"});
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "stimuliTilesViewRequest", this.handleStimuliTilesViewRequest);
  },

  render:  function() {
    this.$el.html(this.template());
  },

  handleStimuliTilesViewRequest: function(skill){
    new App.Views["StimuliTiles" + skill] ({ el: ".js-stimuliTiles"});
  }
});
