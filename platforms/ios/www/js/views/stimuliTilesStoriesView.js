App.Views.StimuliTilesStories=Backbone.View.extend({template:App.templates.stimuliTilesStories,gridClass:"js-stimuliTilesStories",tileClass:"tile grid-cell u-text-center",tiles:[],initialize:function(){_.bindAll(this),this.listen()},listen:function(){this.listenTo(App.Dispatcher,"SkillChangeRequested:Stories",this.handleSkillChangeRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:SightWords",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:OnsetRime",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:Affixes",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:Letters",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"matrixStudentSelectorTabActiveRequest",this.handleStudentChangeRequest)},render:function(){this.$el.html(this.template(this.templateJSON())),this.$gridClass=$("."+this.gridClass);var e=this,t=0,i=App.stimuli.where({studentId:App.selectedStudent.get("id"),skill:App.Config.skill.stories});_.each(i,function(i){var s=new App.Views.Tile({className:e.tileClass,model:i,index:(t+=1)+". "});e.tiles.push(s),e.$gridClass.append(s.render().el)})},templateJSON:function(){return{jsClass:this.gridClass}},handleSkillChangeRequest:function(){this.render()},handleSkillReplaceRequest:function(){_.each(this.tiles,function(e){e.remove()}),this.tiles=[]},handleStudentChangeRequest:function(){App.selectedSkill===App.Config.skill.stories&&(this.handleSkillReplaceRequest(),this.render())}});