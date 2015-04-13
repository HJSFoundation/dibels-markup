App.Views.StimuliTilesOnsetRime = Backbone.View.extend({
  template: App.templates.stimuliTilesOnsetRime,

  gridClassOnset: "js-stimuliTileOnset",
  gridClassRime: "js-stimuliTileRime",
  tileClass: "tile grid-cell u-text-center",

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "SkillChangeRequested:OnsetRime", this.handleSkillChangeRequest)
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    var that = this;
    this.$gridClass = $("."+this.gridClassOnset);
    App.stimuliOnsets.each(function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.$gridClass.append(view.render().el);
    });

    this.$gridClass = $("."+this.gridClassRime);
    App.stimuliRimes.each(function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.$gridClass.append(view.render().el);
    });
  },

  templateJSON: function() {
    return {
      jsClassOnset: this.gridClassOnset,
      jsClassRime: this.gridClassRime,
    };
  },

  handleSkillChangeRequest: function  () {
    this.render();
  }

});
