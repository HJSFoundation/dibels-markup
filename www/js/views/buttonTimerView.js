App.Views.ButtonTimer = Backbone.View.extend({
  template: App.templates.buttonTimer,

  events: {
    'click .js-buttonTimer' : 'handleDisplayTimer'
  },

  buttonActive: false,
  filledClass: "st-hidden",
  unfilledClass: "",

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function  () {
    return {
      filledClass: this.filledClass,
      unfilledClass: this.unfilledClass
    }
  },

  handleDisplayTimer: function() {
    console.log("ButtonTimer.handleDisplayTimer")
    this.buttonActive = !this.buttonActive;
    if(this.buttonActive){
      this.filledClass = "";
      this.unfilledClass = "st-hidden";
    }else{
      this.filledClass = "st-hidden";
      this.unfilledClass = "";
    }
    this.render();
    App.Dispatcher.trigger('toggleTimerRequested');
    return false;
  }
});
