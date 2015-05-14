App.Views.StimuliTilesReadingStrategies = Backbone.View.extend({
  tileClass: "tile u-text-center",
  tiles: [],

// Stage 4 - Chunking one syllable words
// Stage 5 - Flipping vowel sounds
// Stage 5 - Skipping and returning
// Stage 6 - Listening and self-correcting
// Stage 7 - Reading smoothly and expressively
// Stage 7 - Paying attention to punctuation
// Stage 7 - Visualizing
// Stage 8 - Predicting and asking questions
// Stage 8 - Identifying affixes
// Stage 9 - Chunking multi syllable words

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    var that = this;

    for(var readingStage=App.Config.minReadingStageForStrategies, stimuli=[]; readingStage<= App.selectedStudent.get('reading_stage'); readingStage=readingStage+1){
      stimuli = stimuli.concat(App.stimuli.where({user_id: App.selectedStudent.get('id'), reading_stage: readingStage, skill: App.Config.skill.readingStrategies}));
    }

    _.each(stimuli,function(stimulus) {
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
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
