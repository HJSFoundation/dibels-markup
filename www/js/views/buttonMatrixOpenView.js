App.Views.ButtonMatrixOpen = Backbone.View.extend({
  template: App.templates.buttonMatrixOpen,

  events: {
    'click' : 'handleOpenMatrix'
  },

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function (){
    this.listenTo(App.Dispatcher, "closeMatrix", this.render);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleOpenMatrix: function() {
    this.$el.empty();
    App.Dispatcher.trigger('openMatrix');
  }

});
