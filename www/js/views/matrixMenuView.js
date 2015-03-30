App.Views.MatrixMenu = Backbone.View.extend({
  template: App.templates.matrixMenu,

  initialize: function() {
    _.bindAll(this);
    this.render();

    this.lettersTab = new App.Views.Tab({el: ".js-matrixMenuTabs"});
    this.$el.append(this.lettersTab.el); 
    this.sightWordsTab = new App.Views.Tab({el: ".js-matrixMenuTabs"});
    this.$el.append(this.sightWordsTab.el); 
    this.onsetRimesTab = new App.Views.Tab({el: ".js-matrixMenuTabs"});
    this.$el.append(this.onsetRimesTab.el); 
    this.affixesTab = new App.Views.Tab({el: ".js-matrixMenuTabs"});
    this.$el.append(this.affixesTab.el); 
    this.storiesTab = new App.Views.Tab({el: ".js-matrixMenuTabs"});
    this.$el.append(this.storiesTab.el); 


    this.onsetRimesTab.makeActive();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});