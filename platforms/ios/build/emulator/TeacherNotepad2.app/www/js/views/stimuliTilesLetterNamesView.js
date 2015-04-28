App.Views.StimuliTilesLetterNames=Backbone.View.extend({template:App.templates.stimuliTilesLetters,gridClass:"js-stimuliTilesLetterNames",tileClass:"tile grid-cell u-text-center",tiles:[],initialize:function(){_.bindAll(this),this.listen()},listen:function(){this.listenTo(App.Dispatcher,"SkillChangeRequested:LetterNames",this.handleSkillChangeRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:CVts",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:LetterSounds",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:SightWords",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:OnsetRimes",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:Affixes",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:StageStories",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"SkillChangeRequested:LeveledTexts",this.handleSkillReplaceRequest),this.listenTo(App.Dispatcher,"matrixStudentSelectorTabActiveRequest",this.handleStudentChangeRequest)},render:function(){this.$el.html(this.template(this.templateJSON())),this.$gridClass=$("."+this.gridClass);var e=this,t=App.stimuli.where({studentId:App.selectedStudent.get("id"),skill:App.Config.skill.letterNames});_.each(t,function(t){var s=new App.Views.Tile({className:e.tileClass,model:t});e.tiles.push(s),e.$gridClass.append(s.render().el)})},templateJSON:function(){return{jsClass:this.gridClass}},handleSkillChangeRequest:function(){this.render()},handleSkillReplaceRequest:function(){_.each(this.tiles,function(e){e.remove()}),this.tiles=[]},handleStudentChangeRequest:function(){App.selectedSkill===App.Config.skill.letterNames&&(this.handleSkillReplaceRequest(),this.render())}});