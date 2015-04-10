App.Views.MatrixMenu = Backbone.View.extend({

  template: App.templates.matrixMenu,

  gridClass: "js-matrixMenuTabs",
  tabClassName: "menu--tab grid-cell",
  tabTag: "a",
  tabs: [
    { label: "LETTER NAMES & SOUNDS", key: "lettersTab"},
    { label: "SIGHT WORDS", key: "sightWordsTab"},
    { label: "ONSETS & RIMES", key: "onsetRimesTab"},
    { label: "AFFIXES", key: "affixesTab"},
    { label: "STORIES", key: "storiesTab"}
  ],


 
  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function(){

    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("."+this.gridClass);
    var that = this;
    _.each(this.tabs, function(tab){
      var options = {
        tagName: that.tabTag, 
        className: that.tabClassName, 
        label: tab.label
      };
      var view = that[tab.key] = new App.Views.MatrixMenuTab(options); 
      that.$gridClass.append(view.render().el);
    });

    this.toggleTab = new App.Views.ButtonMatrixToggle({el: ".js-buttonMatrixToggle"});
    this.$gridClass.append(this.toggleTab.render().el);

  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  }

});