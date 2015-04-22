App.Views.Matrix = Backbone.View.extend({
  template: App.templates.matrix,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.matrixMenuView = new App.Views.MatrixMenu({ el: ".js-matrixMenu"});
    this.stimuliTilesViewLetterNames = new App.Views.StimuliTilesLetterNames({ el: ".js-stimuliTiles"});
    this.stimuliTilesViewLetterSounds = new App.Views.StimuliTilesLetterSounds({ el: ".js-stimuliTiles"});
    this.stimuliTilesViewWords = new App.Views.StimuliTilesSightWords({ el: ".js-stimuliTiles"});
    this.stimuliTilesViewOnsetRimes = new App.Views.StimuliTilesOnsetRimes({ el: ".js-stimuliTiles"});
    this.stimuliTilesViewStageStories = new App.Views.StimuliTilesStageStories({ el: ".js-stimuliTiles"});
    this.matrixStudentSelectorView = new App.Views.MatrixStudentSelector({ el: ".js-matrixStudentSelector"});
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "closeMatrix", this.handleCloseMatrix);
  },

  render: function() {
    this.$el.html(this.template());
  }
});
