App.Views.StimuliTilesStories = Backbone.View.extend({
  template: App.templates.stimuliTilesStories,

  gridClass: "js-stimuliTilesStories",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Stories", this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:SightWords", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:OnsetRime", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Affixes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Letters", this.handleSkillReplaceRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    var i = 0;
    var stimuli = App.stimuli.where({studentId:1, skill: App.Config.skill.stories});
    _.each(stimuli,function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus, index: (i += 1) + ". " });
      that.tiles.push(view);
      that.$gridClass.append(view.render().el);
    });
  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  },

  handleSkillChangeRequest: function() {
    this.render();
  },

  handleSkillReplaceRequest: function() {
    _.each(this.tiles, function(tile){
      tile.remove();
    });
    this.tiles = [];
  }

});
