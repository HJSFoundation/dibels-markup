App.Views.Timer = Backbone.View.extend({
  template: App.templates.timer,

  action: "start",
  visible: false,
  time: {
    seconds: 0,
    minutes: 0
  },

  events: {
    "click .js-timerButton": "handleTimerButtonClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.initializeSeconds(5);
    this.initializeMinutes();
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "toggleTimerRequested", this.toggleTimerRequested);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      visible: (this.visible? "display:block;":""),
      action: this.action,
      seconds: this.seconds,
      minutes: this.minutes
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
    $("#minutes").prop("disabled",false);
    $("#seconds").prop("disabled",false);
  },

  disableTimeSelection: function() {
    $("#minutes").prop("disabled",true);
    $("#seconds").prop("disabled",true);
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
    $("#minutes").val(this.time.minutes);
    $("#seconds").val(this.time.seconds);
  },

  setButtonText: function(string) {
    $(".js-timerButton").text(string);
  },

  handleTimerButtonClick: function() {
    if (this.action === "start") {
      this.time.seconds = $("#seconds").val();
      this.time.minutes = $("#minutes").val();
      this.startTimer();
    } else {
      this.stopTimer(1);
    }
    return false;
  }
});
