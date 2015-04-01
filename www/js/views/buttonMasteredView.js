App.Views.ButtonMastered = Backbone.View.extend({
  template: App.templates.buttonMastered,

  events: {
    "click" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  },

  handleClick: function (){
    console.log("buttonMasterd clicked");
    return false;
  }
});