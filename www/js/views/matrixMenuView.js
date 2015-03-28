App.Views.MatrixMenu = Backbone.View.extend({
  template: App.templates.matrixMenu,

  initialize: function() {
    _.bindAll(this);
    this.render();
    // this.tab1View = new App.Views.Tab({ el: ".js-tab1"});
    // this.tab2View = new App.Views.Tab({ el: ".js-tab2"});
    // this.tab3View = new App.Views.Tab({ el: ".js-tab3"});
    // this.tab4View = new App.Views.Tab({ el: ".js-tab4"});

  },

  render:  function() {
    this.$el.html(this.template());
  }
});