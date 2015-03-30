App.Views.MatrixMenu = Backbone.View.extend({
  template: App.templates.matrixMenu,

  config: {
    tabCount: 5
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.tabViews=[];
    for(var i=0;i<this.config.tabCount;i++){
      this.tabViews[i] = new App.Views.Tab({ el: ".js-matrixMenuTab"});
    }
  },

  render:  function() {
    this.$el.html(this.template());
  }
});