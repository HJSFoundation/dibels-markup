App.Views.StageStimulusLetterSounds=Backbone.View.extend({template:App.templates.stageStimulusLetters,initialize:function(){_.bindAll(this),this.listen()},listen:function(){this.listenTo(App.Dispatcher,"StimulusChangeRequested:"+App.Config.skill.letterSounds,this.handleSkillChangeRequest)},render:function(e){this.$el.html(this.template(e))},handleSkillChangeRequest:function(e){this.render(e)}});