App.Views.Application = Backbone.View.extend({
  initialize: function() {
    this.loginView = new App.Views.Login({ el: this.$el });
    this.listen();

    // localStorage.clear();

    App.students = new App.Collections.Students();
    App.students.fetch();
    if(App.students.length===0){
      App.students.create({id: 1, firstname: "Bernie", lastname: "Bivins", readingStage: 1});
      App.students.create({id: 2, firstname: "Clark", lastname: "Kempt", readingStage: 2});
      App.students.create({id: 3, firstname: "Princess", lastname: "Peach", readingStage: 3});
      App.students.create({id: 4, firstname: "Clint", lastname: "Eastman", readingStage: 4});
      App.students.create({id: 5, firstname: "Hugo", lastname: "Boss", readingStage: 5});
    }
  
    App.selectedStudent = App.students.at(0);
    App.selectedSkill = "";

    App.stimuli = new App.Collections.Stimuli({localStorageName: "stimuli"});
    App.stimuli.fetch();
    if(App.stimuli.length===0){

      App.students.each(function(student){

        var id= student.get("id");




        var a="a".charCodeAt(0);
        var z="z".charCodeAt(0);
        var c;
        for( c = a; c <= z; c = c + 1){
          App.stimuli.create({stage: 0, skill:App.Config.skill.letterNames, stimulus: String.fromCharCode(c), assessment:"clear", studentId: id});
        }

        var A="A".charCodeAt(0);
        var Z="Z".charCodeAt(0);

        for(
          c=A; c<=Z;c=c+1){
          App.stimuli.create({stage: 0, skill:App.Config.skill.letterNames, stimulus: String.fromCharCode(c), assessment:"clear", studentId: id});
        }


        var a="a".charCodeAt(0);
        var z="z".charCodeAt(0);
        var c;
        for( c = a; c <= z; c = c + 1){
          App.stimuli.create({stage: 0, skill:App.Config.skill.letterSounds, stimulus: String.fromCharCode(c), assessment:"clear", studentId: id});
        }

        var A="A".charCodeAt(0);
        var Z="Z".charCodeAt(0);

        for(
          c=A; c<=Z;c=c+1){
          App.stimuli.create({stage: 0, skill:App.Config.skill.letterSounds, stimulus: String.fromCharCode(c), assessment:"clear", studentId: id});
        }





        var a="a".charCodeAt(0);
        var z="z".charCodeAt(0);
        var c;
        for( c = a; c <= z; c = c + 1){
          App.stimuli.create({stage: 0, skill:App.Config.skill.sightWords, stimulus: String.fromCharCode(c)+"asdas", assessment:"clear", studentId: id});
        }

        _.forEach(["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"], function(o){
          App.stimuli.create({stage: 0, skill: App.Config.skill.onsetRimes, subSkill: App.Config.skill.onsets, stimulus: o, assessment:"clear", studentId: id});
        });

        _.forEach(["at","ap","ad","am","an","id","im","in","ip","it","od","op","om","ot","ud","un","up","ut","ed","em","en","ep","et","on"], function(o){
          App.stimuli.create({stage: 0, skill: App.Config.skill.onsetRimes, subSkill: App.Config.skill.rimes, stimulus: o, assessment:"clear", studentId: id});
        });

        _.forEach(["Dentist","Chores","Digging","Getting Dressed","I Don't Like It",
          "In Our House","Lost Keys","My Baby Chick","No More Training Wheels",
          "Picture Album","Rex","Sick","Mr. and Mrs. Orange","Dancing Like a Monkey",
          "The Last Hurrah","My Forgone Solution"], function(title){
          App.stimuli.create({stage: 0, skill: App.Config.skill.stories, stimulus: title, assessment:"clear", studentId: id});
        });

      });
    }
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  },

  handleLoggedIn: function() {
    this.teacherWorkspaceView = new App.Views.TeacherWorkspace({ el: this.$el});
  }
});
