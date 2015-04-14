App.Views.ButtonFlip = Backbone.View.extend({
  template: App.templates.buttonFlip,

  events: {
    'click' : 'handleflipScreen'
  },

  initialize: function(options) {
    this.cssClass = options.cssClass;
    this.text = options.text;
   _.bindAll(this);
    this.render();
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "closeMatrix", this.handleCloseMatrix);
  },

  render: function() {
    this.$el.html(this.template({cssClass: this.cssClass, text: this.text}));
  },

  handleflipScreen: function() {
    App.Dispatcher.trigger('flipScreenButtonTapped');
  },

  handleCloseMatrix: function () {
    this.$el.addClass("animated slideOutLeft");
  }

});
