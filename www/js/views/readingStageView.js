App.ReadingStage = Backbone.View.extend({


  events: {
    "click ": "initWorkspace"
  },

  initialize: function() {
    _.bindAll(this);
    this.listenTo(dispatcher, "initReadingStage", this.render);
  },

  render:  function() {
    this.$el = $("#applicationContainer");
    this.$el.html(this.template());
    // good practice to include return this in render to accomodate chained calls
    return this;
  },

});

App.ReadingStage.prototype.template = App.templates.readingStage;




