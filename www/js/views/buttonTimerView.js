App.Views.ButtonTimer = Backbone.View.extend({
  template: App.templates.buttonTimer,

  events: {
    'click' : 'handleDisplayTimer'
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "closeMatrix", this.handleCloseMatrix);
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleDisplayTimer: function() {
    App.Dispatcher.trigger('displayTimerButtonTapped');
  },

  handleCloseMatrix: function () {
    this.$el.addClass("animated slideOutLeft");
  }

});
