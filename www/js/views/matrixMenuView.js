App.Views.MatrixMenu = Backbone.View.extend({
  template: App.templates.matrixMenu,

  initialize: function() {
    _.bindAll(this);
    this.render();

    this.lettersTab = new App.Views.MatrixMenuTab({el: ".js-lettersTab"});
    this.sightWordsTab = new App.Views.MatrixMenuTab({el: ".js-sightWordsTab"});
    this.onsetRimesTab = new App.Views.MatrixMenuTab({el: ".js-onsetRimesTab"});
    this.affixesTab = new App.Views.MatrixMenuTab({el: ".js-affixesTab"});
    this.storiesTab = new App.Views.MatrixMenuTab({el: ".js-storiesTab"});
    this.toggleTab = new App.Views.ButtonMatrixToggle({el: ".js-buttonMatrixToggle"});

    this.lettersTab.makeActive();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});