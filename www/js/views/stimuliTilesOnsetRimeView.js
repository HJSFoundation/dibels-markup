App.Views.StimuliTilesOnsetRime = Backbone.View.extend({
  template: App.templates.stimuliTilesOnsetRime,

  gridClassOnset: "js-stimuliTileOnset",
  gridClassRime: "js-stimuliTileRime",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],


  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:OnsetRime", this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:Letters", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:SightWords", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Affixes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Stories", this.handleSkillReplaceRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    var that = this;
    this.$gridClass = $("."+this.gridClassOnset);
    var stimuli = App.stimuli.where({studentId:1, subSkill: App.Config.skill.onsets});
    _.each(stimuli,function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.tiles.push(view);
      that.$gridClass.append(view.render().el);
    });

    var stimuli = App.stimuli.where({studentId:1, subSkill: App.Config.skill.rimes});
    this.$gridClass = $("."+this.gridClassRime);
    _.each(stimuli,function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
      that.tiles.push(view);
      that.$gridClass.append(view.render().el);
    });
  },

  templateJSON: function() {
    return {
      jsClassOnset: this.gridClassOnset,
      jsClassRime: this.gridClassRime,
    };
  },

  handleSkillChangeRequest: function() {
    this.render();
  },

  handleSkillReplaceRequest: function(){
    _.each(this.tiles, function(tile){
      tile.remove();
    });
    this.tiles = [];

  }
});
