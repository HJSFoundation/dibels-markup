App.Views.StimuliTilesLetters = Backbone.View.extend({
  template: App.templates.stimuliTilesLetters,

  gridClass: "js-stimuliTilesLetters",
  tileClass: "tile grid-cell u-text-center",
  tiles: {},

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Letters", this.handleSkillChangeRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    App.stimuliLetters.each(function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.tiles[stimulus.get("stimulus")] = view;
      that.$gridClass.append(view.render().el);
    });
    App.assessments.each(function(assessment){
      that.tiles[assessment.get("stimulus")].setAssessment(assessment.get("assessment"));
    });
  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  },

  handleSkillChangeRequest: function() {
    this.render();
  }
});
