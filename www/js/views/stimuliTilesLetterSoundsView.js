App.Views.StimuliTilesLetterSounds = Backbone.View.extend({
  template: App.templates.stimuliTilesLetters,

  gridClass: "js-stimuliTilesLetterSounds",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterSounds", this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterNames", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:SightWords", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:OnsetRimes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Affixes", this.handleSkillReplaceRequest);
    this.listenTo(App.Dispatcher, "SkillChangeRequested:Stories", this.handleSkillReplaceRequest);

    this.listenTo(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", this.handleStudentChangeRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    var stimuli = App.stimuli.where({studentId: App.selectedStudent.get('id'), skill: App.Config.skill.letterSounds});
    _.each(stimuli,function(stimulus){
      var view = new App.Views.Tile({ className: that.tileClass, model: stimulus});
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
  },

  handleStudentChangeRequest: function()  {
    if(App.selectedSkill===App.Config.skill.letterSounds){
      this.handleSkillReplaceRequest();
      this.render();
    }
  }
});
