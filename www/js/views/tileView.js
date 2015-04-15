App.Views.Tile = Backbone.View.extend({
  template: App.templates.tile,

  events: {
    "click" : "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.index = options.index;
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      index: this.index,
      stimulus: this.model.get("stimulus")
    };
  },

  // makeActive: function(f){
  //   this.status = (f?"st-active":"");
  //   this.render();
  // },

  handleClick: function() {
    console.log(this.model.get('stimulus'));
    App.Dispatcher.trigger("StimulusChangeRequested:"+this.model.get("skill"), {stimulus: this.model.get("stimulus")});
  }
});
