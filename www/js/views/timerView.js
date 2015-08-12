App.Views.Timer = Backbone.View.extend({
  template: App.templates.timer,

  initialize: function() {
    _.bindAll(this);


    this.action = "start";
    this.visible = false;
    this.time = {
      seconds: 0,
      minutes: 0
    };


    this.initializeSeconds(5);
    this.initializeMinutes();
    this.listen();
    this.secondsId = this.$el.attr("class")+"_seconds";
    this.minutesId = this.$el.attr("class")+"_minutes";
    this.buttonId = this.$el.attr("class")+"_button";

    this.events = {};
    this.events["click #"+this.buttonId] = "handleTimerButtonClick";

    if(this.$el.attr("class") === "js-timer0"){
      this.bottomValue = "bottom:0px";
    }else{
      this.bottomValue = "bottom:25px";
    }
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "toggleTimerRequested", this.toggleTimerRequested);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$minutes = $("#"+this.minutesId);
    this.$seconds = $("#"+this.secondsId);
  },

  templateJSON: function() {
    return {
      visible: (this.visible? "display:block;"+this.bottomValue:""),
      action: this.action,
      seconds: this.seconds,
      minutes: this.minutes,
      minutesId: this.minutesId,
      secondsId: this.secondsId,
      buttonId: this.buttonId,
      bottomValue: this.bottomValue
    };
  },

  formatTime: function(time) {
    var string = time.toString();
    if (string.length < 2) {
      string = "0" + string;
    }
    return string;
  },

  initializeSeconds: function(step) {
    this.seconds = [];
    for (var i=0; i<60; i+=step) {
      this.seconds.push({value: i, display: this.formatTime(i)});
    }
  },

  initializeMinutes: function() {
    this.minutes = [];
    for (var i=0; i<31; i+=1) {
      this.minutes.push({value: i, display: this.formatTime(i)});
    }
  },

  toggleTimerRequested: function() {
    this.visible = !this.visible;
    this.render();
  },

  startTimer: function() {
    this.initializeSeconds(1);
    this.action = "stop";
    this.render();
    this.renderTimerDisplay();
    this.disableTimeSelection();
    this.interval = setInterval(this.updateTimerDisplay, 1000);
  },

  stopTimer: function(secondsStep) {
    clearInterval(this.interval);
    this.initializeSeconds(secondsStep);
    this.action = "start";
    this.render();
    this.enableTimeSelection();
    this.renderTimerDisplay();
  },

  enableTimeSelection: function() {
    this.$minutes.prop("disabled",false);
    this.$seconds.prop("disabled",false);
  },

  disableTimeSelection: function() {
    this.$minutes.prop("disabled",true);
    this.$seconds.prop("disabled",true);
  },

  updateTimerDisplay: function() {
    this.time.seconds -= 1;
    if (this.time.seconds < 0) {
      this.time.seconds = 59;
      this.time.minutes -= 1;
      if (this.time.minutes < 0) {
        this.time.seconds = 0;
        this.time.minutes = 0;
        this.stopTimer(5);
      }
    }
    this.renderTimerDisplay();
  },

  renderTimerDisplay: function() {
    this.$minutes.val(this.time.minutes);
    this.$seconds.val(this.time.seconds);
  },

  handleTimerButtonClick: function() {
    if (this.action === "start") {
      this.time.seconds = this.$seconds.val();
      this.time.minutes = this.$minutes.val();
      this.startTimer();
    } else {
      this.stopTimer(1);
    }
    return false;
  }
});
