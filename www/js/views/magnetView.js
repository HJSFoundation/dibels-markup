App.Views.Magnet = Backbone.View.extend({
  template: App.templates.magnet,

  events: {
    "click .js-magnetClose": "handleMagnetClosePressed"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.text = options.text;
  },

  render: function() {
    return this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function(){
    return {
      text: this.text
    };
  },

  handleMagnetClosePressed: function(){
    this.remove();
    return false;
  }

});
