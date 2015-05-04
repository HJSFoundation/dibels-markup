App.Views.StimuliTilesLeveledTexts=Backbone.View.extend({template:App.templates.stimuliTilesStories,gridClass:"js-stimuliTilesLeveledTexts",tileClass:"tile grid-cell u-text-center",tiles:[],initialize:function(){_.bindAll(this),this.listen()},listen:function(){this.listenTo(App.Dispatcher,"SkillChangeRequested:LeveledTexts",this.handleSkillChangeRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:CVts",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:StageStories",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:SightWords",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:OnsetRimes",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:Affixes",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:LetterNames",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:LetterSounds",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"matrixStudentSelectorTabActiveRequest",this.handleStudentChangeRequest)},render:function(){this.$el.html(this.template(this.templateJSON())),this.$gridClass=$("."+this.gridClass);var e=this,t=0,i=App.stimuli.where({studentId:App.selectedStudent.get("id"),skill:App.Config.skill.leveledTexts});_.each(i,function(i){var s=new App.Views.Tile({className:e.tileClass,model:i,index:(t+=1)+". "});e.tiles.push(s),e.$gridClass.append(s.render().el)})},templateJSON:function(){return{jsClass:this.gridClass}},handleSkillChangeRequest:function(){this.render()},handleSkillReplaceRequest:function(){_.each(this.tiles,function(e){e.remove()}),this.tiles=[]},handleStudentChangeRequest:function(){App.selectedSkill===App.Config.skill.leveledTexts&&(this.handleSkillReplaceRequest(),this.render())}});