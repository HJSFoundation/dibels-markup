App.Views.StimuliTilesLetters = Backbone.View.extend({
  template: App.templates.stimuliTilesLetters,
  
  gridClass: "js-stimuliTilesLetters",

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("."+this.gridClass);
    var that = this;
    App.stimuliLetters.each(function(stimulus){
      var view = new App.Views.Tile({ model: stimulus});
      that.$gridClass.append(view.render().el);

    });
  },
  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  }

});