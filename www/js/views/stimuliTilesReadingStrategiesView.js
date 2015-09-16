App.Views.StimuliTilesReadingStrategies = Backbone.View.extend({
  tileClass: "tile grid-cell u-text-center",
  tiles: [],

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    var that = this;
    for (var readingStage = App.Config.minReadingStageForStrategies, stimuli = []; readingStage <= App.selectedStudent.displayedReadingStage(); readingStage += 1) {
      stimuli = stimuli.concat(App.stimuli.where({ user_id: App.selectedStudent.get('id'), reading_stage: readingStage, skill: App.Config.skill.readingStrategies }));
    }

    _.each(stimuli,function(stimulus) {
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus });
      that.tiles.push(view);
      that.$el.append(view.render().el);
    });
  },

  remove: function() {
    _.each(this.tiles, function(tile) {
      tile.remove();
    });
    this.tiles = [];
  }
});
