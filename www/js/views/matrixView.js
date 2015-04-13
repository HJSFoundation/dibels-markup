App.Views.Matrix = Backbone.View.extend({
  template: App.templates.matrix,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.matrixMenuView = new App.Views.MatrixMenu({ el: ".js-matrixMenu"});
    this.stimuliTilesViewLetters = new App.Views.StimuliTilesLetters({ el: ".js-stimuliTiles"});
    this.stimuliTilesViewWords = new App.Views.StimuliTilesSightWords({ el: ".js-stimuliTiles"});
    this.stimuliTilesViewOnsetRime = new App.Views.StimuliTilesOnsetRime({ el: ".js-stimuliTiles"});
    this.stimuliTilesViewStories = new App.Views.StimuliTilesStories({ el: ".js-stimuliTiles"});
    this.matrixStudentSelectorView = new App.Views.MatrixStudentSelector({ el: ".js-matrixStudentSelector"});
  },

  render: function() {
    this.$el.html(this.template());
  }

});
