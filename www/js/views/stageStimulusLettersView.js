App.Views.StageStimulusLetters = Backbone.View.extend({
  template: App.templates.stageStimulusLetters,

  initialize: function() {
    _.bindAll(this);
    this.listen();
    this.alphabet=[];
    var a="a".charCodeAt(0);
    var z="z".charCodeAt(0);
    var c;
    for( c = a; c <= z; c = c + 1) {
      this.alphabet.push[String.fromCharCode(c)];
    }
    a="A".charCodeAt(0);
    z="Z".charCodeAt(0);
    for( c = a; c <= z; c = c + 1) {
      this.alphabet.push[String.fromCharCode(c)];
    }
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.letterNames, this.handleSkillChangeRequest);
    // this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.letterSounds, this.handleSkillChangeRequest);
  },

  render: function(stimulus_object) {
    this.$el.html(this.template(stimulus_object));
    $('.stage__stimulus__gallery').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });
  },

  handleSkillChangeRequest: function(stimulus_object) {
    this.render(stimulus_object);
  },
});
