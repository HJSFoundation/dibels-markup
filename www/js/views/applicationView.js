App.Views.Application = Backbone.View.extend({
  initialize: function() {
    this.loginView = new App.Views.Login({ el: this.$el });
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);

    App.stimuliLetters = new App.Collections.Stimuli({localStorageName: "stimuliLetters"});
    App.stimuliLetters.fetch();
    if(App.stimuliLetters.length===0){

      var a="a".charCodeAt(0);
      var z="z".charCodeAt(0);
      var c;
      for( c = a; c <= z; c = c + 1){ +
        App.stimuliLetters.create({stage: 0, skill:"letter sounds", stimulus: String.fromCharCode(c), assessment:"clear"});
      }

      var A="A".charCodeAt(0);
      var Z="Z".charCodeAt(0);

      for(
        c=A; c<=Z;c=c+1){
        App.stimuliLetters.create({stage: 0, skill:"letter sounds", stimulus: String.fromCharCode(c), assessment:"clear"});
      }

      console.log(App.stimuliLetters);
    }

    App.stimuliWords = new App.Collections.Stimuli({localStorageName: "stimuliWords"});
    App.stimuliWords.fetch();
    if(App.stimuliWords.length===0){

      var a="a".charCodeAt(0);
      var z="z".charCodeAt(0);
      var c;
      for( c = a; c <= z; c = c + 1){ +
        App.stimuliWords.create({stage: 0, skill:"sight words", stimulus: String.fromCharCode(c)+"asdas", assessment:"clear"});
      }

      console.log(App.stimuliWords);
    }

    App.stimuliOnsets = new App.Collections.Stimuli({localStorageName: "stimuliOnsets"});
    App.stimuliOnsets.fetch();
    if(App.stimuliOnsets.length===0){
      _.forEach(["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"], function(o){
        App.stimuliOnsets.create({stage: 0, skill:"onsets and rimes", stimulus: o, assessment:"clear"});
      });

      console.log(App.stimuliOnsets);
    }


    App.stimuliRimes = new App.Collections.Stimuli({localStorageName: "stimuliRimes"});
    App.stimuliRimes.fetch();
    if(App.stimuliRimes.length===0){
      _.forEach(["at","ap","ad","am","an","id","im","in","ip","it","od","op","om","ot","ud","un","up","ut","ed","em","en","ep","et","on"], function(o){
        App.stimuliRimes.create({stage: 0, skill:"onsets and rimes", stimulus: o, assessment:"clear"});
      });

      console.log(App.stimuliRimes);
    }


    App.stimuliStories = new App.Collections.Stimuli({localStorageName: "stimuliStories"});
    App.stimuliStories.fetch();
    if(App.stimuliStories.length===0){
      _.forEach(["Dentist","Chores","Digging","Getting Dressed","I Don't Like It",
        "In Our House","Lost Keys","My Baby Chick","No More Training Wheels",
        "Picture Album","Rex","Sick","Mr. and Mrs. Orange","Dancing Like a Monkey",
        "The Last Hurrah","My Forgone Solution"], function(title){
        App.stimuliStories.create({stage: 0, skill:"stories", stimulus: title, assessment:"clear"});
      });

      console.log(App.stimuliStories);
    }

    App.students = new App.Collections.Students();
    App.students.fetch();
    if(App.students.length===0){
      App.students.create({id: 1, firstname: "Bernie", lastname: "Bivins"});
      App.students.create({id: 2, firstname: "Matt", lastname: "Bivins"});
      App.students.create({id: 3, firstname: "Evan", lastname: "Bivins"});
      App.students.create({id: 4, firstname: "Clint", lastname: "Eastman"});
      App.students.create({id: 5, firstname: "Hugo", lastname: "Bloch"});
    }
  },

  handleLoggedIn: function() {
    this.teacherWorkspaceView = new App.Views.TeacherWorkspace({ el: this.$el});
  }
});
