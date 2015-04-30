var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    el: "#applicationContainer",
    productionApiUrl: "",
    stagingApiUrl: "http://staging.tutormate.org/api/v1",
    developmentApiUrl: "http://localhost:3000",
    maxStudentCount: 6,
    maxStageCount: 9,
    skill: {
      letterNames: "letter_names",
      letterSounds: "letter_sounds",
      sightWords: "sight_words",
      onsetRimes: "onset_rimes",
      cvts: "cvts",
      onsets: "onsets",
      rimes: "rimes",
      affixes: "affixes",
      stageStories: "stage_stories",
      leveledTexts: "leveled_texts"
    },
  },
  url: "http://staging.tutormate.org/api/v1",
  currentUser: null,

  sendAuthentication: function (xhr) {
    var email = App.currentUser.email;
    var token = App.currentUser.token;
    var header= 'Token token="'+token+'", email="'+email+'"';
  xhr.setRequestHeader('Authorization', header);
},

  initializeTestData: function(){

    // localStorage.clear();

    // App.students = new App.Collections.Students({localStorageName: "students"});
    App.students = new App.Collections.Students();
    App.students.fetch();
    App.students.create({id: 1, first_name: "Bernie", last_name: "Bivins", reading_stage: 7});
    App.students.create({id: 2, first_name: "Clark", last_name: "Kempt", reading_stage: 3});
    App.students.create({id: 3, first_name: "Princess", last_name: "Peach", reading_stage: 2});
    App.students.create({id: 4, first_name: "Clint", last_name: "Eastman", reading_stage: 4});
    App.students.create({id: 5, first_name: "Hugo", last_name: "Boss", reading_stage: 1});
  
    App.selectedStudent = App.students.at(0);
    App.selectedSkill = "";


    // App.stimuli = new App.Collections.Stimuli({localStorageName: "stimuli"});
    App.stimuli = new App.Collections.Stimuli();
    App.stimuli.fetch();
    App.students.each(function(student) {
      var a, z, c, A, Z;
      var user_id= student.get("id");

      for(var stageIndex=1; stageIndex<10; stageIndex = stageIndex + 1){

        if(stageIndex===1){
          a="a".charCodeAt(0);
          z="z".charCodeAt(0);
          c;
          for( c = a; c <= z; c = c + 1) {
            App.stimuli.create({reading_stage: 1, skill:App.Config.skill.letterNames, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
          }

          A="A".charCodeAt(0);
          Z="Z".charCodeAt(0);

          for(
            c=A; c<=Z;c=c+1) {
            App.stimuli.create({reading_stage: 1, skill:App.Config.skill.letterNames, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
          }
        }

        if(stageIndex===2){

          a="a".charCodeAt(0);
          z="z".charCodeAt(0);

          for( c = a; c <= z; c = c + 1) {
            App.stimuli.create({reading_stage: 2, skill:App.Config.skill.letterSounds, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
          }

          A="A".charCodeAt(0);
          Z="Z".charCodeAt(0);

          for(
            c=A; c<=Z;c=c+1) {
            App.stimuli.create({reading_stage: 2, skill:App.Config.skill.letterSounds, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
          }

        }

        if(stageIndex===3){

          _.forEach(["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"], function(o) {
            App.stimuli.create({reading_stage: 3, skill: App.Config.skill.cvts, sub_skill: App.Config.skill.onsets, value: o, assessment:"clear", user_id: user_id});
          });

          _.forEach(["at","ap","ad","am","an","id","im","in","ip","it","od","op","om","ot","ud","un","up","ut","ed","em","en","ep","et","on"], function(o) {
            App.stimuli.create({reading_stage: 3, skill: App.Config.skill.cvts, sub_skill: App.Config.skill.rimes, value: o, assessment:"clear", user_id: user_id});
          });
        }


        if(stageIndex>3){
          a="a".charCodeAt(0);
          z="z".charCodeAt(0);
          c;
          for( c = a; c <= z; c = c + 1) {
            App.stimuli.create({reading_stage: stageIndex, skill:App.Config.skill.sightWords, value: String.fromCharCode(c)+"asdas", assessment:"clear", user_id: user_id});
          }

          _.forEach(["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","y","z"], function(o) {
            App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.onsets, value: o, assessment:"clear", user_id: user_id});
          });

          _.forEach(["at"+stageIndex,"ap","ad","am","an","id","im","in","ip","it","od","op","om","ot","ud","un","up","ut","ed","em","en","ep","et","on"], function(o) {
            App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.rimes, value: o, assessment:"clear", user_id: user_id});
          });
        }

        if(stageIndex>3 && stageIndex<8){
          _.forEach(["Dentist"+stageIndex,"Chores","Digging","Getting Dressed","I Don't Like It",
            "In Our House","Lost Keys","My Baby Chick","No More Training Wheels",
            "Picture Album","Rex","Sick","Mr. and Mrs. Orange","Dancing Like a Monkey",
            "The Last Hurrah","My Forgone Solution"], function(title) {
            App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.stageStories, value: title, assessment:"clear", user_id: user_id});
          });
        }

        _.forEach(["ltDentist"+stageIndex,"Chores","Digging","Getting Dressed","I Don't Like It",
          "In Our House","Lost Keys","My Baby Chick","No More Training Wheels",
          "Picture Album","Rex","Sick","Mr. and Mrs. Orange","Dancing Like a Monkey",
          "The Last Hurrah","My Forgone Solution"], function(title) {
          App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.leveledTexts, value: title, assessment:"clear", user_id: user_id});
        });
      }
    });
  }
};
