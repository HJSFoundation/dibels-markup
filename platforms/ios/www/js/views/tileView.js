App.Views.Tile=Backbone.View.extend({template:App.templates.tile,selectedClass:"",events:{click:"handleClick"},initialize:function(e){_.bindAll(this),this.index=e.index,this.listen()},listen:function(){this.listenTo(App.Dispatcher,"StimulusChangeRequested:"+App.Config.skill.letters,this.handleStimulusChangeRequested),this.listenTo(App.Dispatcher,"StimulusChangeRequested:"+App.Config.skill.sightWords,this.handleStimulusChangeRequested),this.listenTo(App.Dispatcher,"StimulusChangeRequested:"+App.Config.skill.onsetRimes,this.handleStimulusChangeRequested),this.listenTo(App.Dispatcher,"StimulusChangeRequested:"+App.Config.skill.affixes,this.handleStimulusChangeRequested),this.listenTo(App.Dispatcher,"StimulusChangeRequested:"+App.Config.skill.stories,this.handleStimulusChangeRequested)},render:function(){return this.$el.html(this.template(this.templateJSON())),this},templateJSON:function(){return{index:this.index,stimulus:this.model.get("stimulus"),assessmentClass:"st-"+this.model.get("assessment"),selectedClass:this.selectedClass}},setAssessment:function(e){this.model.set("assessment",e),this.model.save({assessment:e}),this.render()},handleClick:function(){App.Dispatcher.trigger("StimulusChangeRequested:"+this.model.get("skill"),{skill:this.model.get("skill"),stimulus:this.model.get("stimulus")})},handleButtonAssessmentClicked:function(e){this.setAssessment(e)},handleStimulusChangeRequested:function(e){e.stimulus===this.model.get("stimulus")&&e.skill===this.model.get("skill")?(this.selectedClass="st-selected",this.listenTo(App.Dispatcher,"buttonAssessmentClicked",this.handleButtonAssessmentClicked)):(this.selectedClass="",this.stopListening(App.Dispatcher,"buttonAssessmentClicked")),this.render()}});