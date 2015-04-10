App.Views.MenuActivity = Backbone.View.extend({
  template: App.templates.menuActivity,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.buttonPhrasesView = new App.Views.ButtonPhrases({el: ".js-buttonPhrases"});
    this.buttonTilesView = new App.Views.ButtonTiles({el: ".js-buttonTiles"});
  },

  render: function() {
    this.$el.html(this.template());
  }
});
