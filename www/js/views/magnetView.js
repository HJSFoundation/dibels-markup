App.Views.Magnet = Backbone.View.extend({
  template: App.templates.magnet,

  events: {
    "click .js-magnetClose": "handleMagnetClosePressed"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.text = options.text;
    this.flipped = options.flipped;
  },

  render: function() {
    return this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      text: this.text,
      left: this.magnetLeft(),
      top: this.magnetTop(),
      flipped: ( this.flipped ? "st-flipped" : "")
    };
  },

  randomIntFromRange: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  magnetTop: function() {
    var keyboardHeight = 442;
    var magnetHeight = 90;
    var screenHeight = $(".workspace").height();
    var parentTop = $(".js-whiteboard").offset().top;
    var max = screenHeight - keyboardHeight - parentTop - ( magnetHeight / 2);
    return this.randomIntFromRange(0, max);
  },

  magnetLeft: function() {
    var magnetHeight = 90;
    var parentWidth = $(".js-whiteboard").width();
    var max = parentWidth - magnetHeight;
    return this.randomIntFromRange(0, max);
  },

  handleMagnetClosePressed: function() {
    this.remove();
    return false;
  }
});
