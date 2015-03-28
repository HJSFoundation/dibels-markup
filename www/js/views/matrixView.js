App.Views.Matrix = Backbone.View.extend({
  template: App.templates.matrix,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.matrixMenuView = new App.Views.MatrixMenu({ el: ".js-matrixMenu"});
    this.stimuliTilesView = new App.Views.StimuliTiles({ el: ".js-stimuliTiles"});
    this.matrixStudentSelectorView = new App.Views.MatrixStudentSelector({ el: ".js-matrixStudentSelector"});

  },

  render:  function() {
    this.$el.html(this.template());
  }
});
