App.Views.StimuliTilesLetterNames = Backbone.View.extend({
  template: App.templates.stimuliTilesLetters,

  gridClass: "js-stimuliTilesLetterNames",
  tileClass: "tile grid-cell u-text-center",
  tiles: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterNames", this.handleSkillChangeRequest);

    this.listenTo(App.Dispatcher, "SkillChangeRequested:LetterSounds", this.handleSkillReplaceRequest);
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
    var stimuli = App.stimuli.where({studentId: App.selectedStudent.get('id'), skill: App.Config.skill.letterNames});
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
    if(App.selectedSkill===App.Config.skill.letterNames){
      this.handleSkillReplaceRequest();
      this.render();
    }
  }
});
