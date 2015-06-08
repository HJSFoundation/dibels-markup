App.Views.Timer = Backbone.View.extend({
  template: App.templates.timer,

  events: {
    "click .js-timerButton": "handleTimerButtonClick"
  },

  highlightClass: "button--warning--inverse",
  iconClassPlus: "icon-plus",
  iconClassMinus: "icon-minus",

  action: "start",
  highlight: "",
  modifier: "",


  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listen()
  },
  listen: function(){
    this.listenTo(App.Dispatcher, "toggleTimerRequested", this.toggleTimerRequested);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function(){
    return {
      highlight: this.highlight,
      action: this.action,
      modifier: this.modifier
    }
  },

  toggleTimerRequested: function(){
    console.log("Timer.toggleTimerRequested");
    $(".timer").toggle();
  },

  handleTimerButtonClick: function(){
    if(this.action === "start"){
      // start time
      this.action = "stop";
    }else{
      // stop timer
      this.action = "start";
    }
    this.render();
    return false;
  },

  startTimer: function(){
    this.interval = setInterval(this.updateTimerDisplay, 1000);
  },

  stopTimer: function(){
    clearInterval(this.interval);
  },

  updateTimerDisplay: function(){
    this.seconds = this.seconds-1;
    if(this.seconds < 0){
      this.seconds = 59;
      this.minutes=this.minutes-1;
      if(this.minutes < 0){
        this.seconds = 0;
        this.minutes = 0;
        this.stopTimer();
      }
    }
    this.renderTimerDisplay();
  }
});
