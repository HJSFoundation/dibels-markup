App.Views.StimuliTilesStories = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,

  gridClass: "js-stimuliTilesStories",
  tileClass: "tile grid-cell u-text-center",

  initialize: function() {
    _.bindAll(this);
    this.listen();

  },

  listen: function(){
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Stories", this.handleSkillChangeRequest)
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    var i=0;
    App.stimuliStories.each(function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus, index: (i += 1) + ". " });
      that.$gridClass.append(view.render().el);
    });
  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  },

  handleSkillChangeRequest: function  () {
    this.render();
  }

});
