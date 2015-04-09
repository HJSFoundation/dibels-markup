App.Views.MatrixMenu = Backbone.View.extend({

  template: App.templates.matrixMenu,
  tabClassName: "menu--tab grid-cell",
  tabTag: "a",

 
  initialize: function() {
    _.bindAll(this);
    this.render();

    this.lettersTab = new App.Views.MatrixMenuTab({ tagName: this.tabTag, className: this.tabClassName, el: ".js-lettersTab", label: "LETTER NAMES & SOUNDS"});
    this.sightWordsTab = new App.Views.MatrixMenuTab({el: ".js-sightWordsTab", label: "SIGHT WORDS"});
    this.onsetRimesTab = new App.Views.MatrixMenuTab({el: ".js-onsetRimesTab", label: "ONSETS & RIMES"});
    this.affixesTab = new App.Views.MatrixMenuTab({el: ".js-affixesTab", label: "AFFIXES"});
    this.storiesTab = new App.Views.MatrixMenuTab({el: ".js-storiesTab", label: "STORIES"});
    this.toggleTab = new App.Views.ButtonMatrixToggle({el: ".js-buttonMatrixToggle"});

    this.lettersTab.makeActive();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});