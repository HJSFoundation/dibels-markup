App.Views.MenuActivity = Backbone.View.extend({
  template: App.templates.menuActivity,
  
  initialize: function() {
    _.bindAll(this);
    this.render();
    this.buttonWordsView = new App.Views.ButtonWords({el: ".js-buttonWords"});
    this.buttonPhrasesView = new App.Views.ButtonPhrases({el: ".js-buttonPhrases"});
    this.buttonTilesView = new App.Views.ButtonTiles({el: ".js-buttonTiles"});
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "closeMatrix", this.handleCloseMatrix);
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleCloseMatrix: function () {
    this.$el.addClass("animated slideOutRight");
  }

});
