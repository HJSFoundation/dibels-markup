App.Views.StageStimulusLetters = Backbone.View.extend({
  template: App.templates.stageStimulusLetters,

  flipped: false,

  initialize: function() {
    _.bindAll(this);
    this.listen();

  },

  listen: function(){
    this.listenTo(App.Dispatcher, "flipScreenButtonTapped", this.handleFlipScreenRequest);
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letters, this.handleSkillChangeRequest);
  },


  render: function(stimulus) {
    // this.$el.html(this.template(this.templateJSON()));
    this.$el.html(this.template(stimulus));
  },

  // templateJSON: function (){
  //   return {
  //     flipState: this.flipState,
  //     stimulus: this.stimulus
  //   }
  // },

  handleSkillChangeRequest: function  (stimulus) {
    // this.stimulus = stimulus;
    this.render(stimulus);
  },

  handleFlipScreenRequest: function (){letters
    if(this.flipped){
      this.$el.removeClass("st-flipped");
    }else{
      this.$el.addClass("st-flipped");
    }
    this.flipped=  !this.flipped;
  }

  
});
