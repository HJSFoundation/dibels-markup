App.Views.StimuliTilesStories = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,
  
  gridClass: "js-stimuliTilesStories",
  tileClass: "tile grid-cell u-text-center",


  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("."+this.gridClass);
    var that = this;
    var i=1;
    App.stimuliStories.each(function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus, index: (i++)+". "});
      that.$gridClass.append(view.render().el);
    });
  },
  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  }

});