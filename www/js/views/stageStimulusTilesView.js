App.Views.StageStimulusTiles = Backbone.View.extend({
  template: App.templates.stageStimulusTiles,

    initialize: function() {
      _.bindAll(this);
      this.listen();
    },

    listen: function() {
      this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.onsetRimes, this.handleSkillChangeRequest);
    },

    render: function() {
      this.$el.html(this.template(this.templateJSON()));
    },

    templateJSON: function(){
      return {
        subSkillClass: this.subSkillClass,
        choices: this.choices,
        onset: this.onset,
        rime: this.rime
      }
    },

    handleSkillChangeRequest: function(stimulus_object) {
      if(stimulus_object.model.get("sub_skill")==="onsets"){
        this.initializeOnsets(stimulus_object.model);
      }else{
        this.initializeRimes(stimulus_object.model);
      }
      this.render();
    },

    initializeOnsets: function(model){
      this.subSkillClass = "";
      this.onset = model.get("value");
      this.choices = ["ad","ap","at","ab"];
      this.rime = this.choices[0];
    },

    initializeRimes: function(model){
      this.subSkillClass = "stage__stimulus--tiles--reverse";
      this.rime = model.get("value");
      this.choices = App.ActivityStimuli.consonants;
      this.onset = this.choices[0];
    }
  });
