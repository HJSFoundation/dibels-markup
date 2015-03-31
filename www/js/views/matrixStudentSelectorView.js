App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

config: {
    tabCount: 5
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.tabViews=[];
    for(var i=0;i<this.config.tabCount;i++){
      this.tabViews[i] = new App.Views.Tab({el: ".js-matrixStudentSelectorTabs"});
      this.$el.append(this.tabViews[i].el); 
    }
    this.tabViews[0].makeActive();

  },

  render:  function() {
    this.$el.html(this.template());
  }
});