function renderFixture(nodeType, attrs, content) {

  var attributes = _.reduce(attrs, function(memo, value, attr) {
    return memo += " " + attr + '="' + value + '"';
  }, "");

  return [
    "<", nodeType,
    attributes,
    ">",
    content,
    "</" + nodeType + ">"
  ].join("");
}

function appendFixture(nodeType, attrs, content) {
  $("#applicationContainer").append(renderFixture(nodeType, attrs, content));
}

window.expect = chai.expect;

before(function() {
      // this.timeout(10000);
  initializeTestData();
});

beforeEach(function() {
  $("body").append("<div id='applicationContainer'/>");
  App.Dispatcher = _.clone(Backbone.Events);
  App.selectedStimulus = new App.Models.Stimulus({skill: "letter_names", value: "a"});
});

afterEach(function() {
  $("#applicationContainer").remove();
});

function initializeTestData (){

  // localStorage.clear();

  // App.students = new App.Collections.Students({localStorageName: "students"});
  App.roster = new App.Collections.Students();
  // App.roster.fetch();
  App.roster.create({id: 1, first_name: "Bernie", last_name: "Bivins", reading_stage: 7});
  App.roster.create({id: 2, first_name: "Clark", last_name: "Kempt", reading_stage: 3});
  App.roster.create({id: 3, first_name: "Princess", last_name: "Peach", reading_stage: 2});
  App.roster.create({id: 4, first_name: "Clint", last_name: "Eastman", reading_stage: 4});
  App.roster.create({id: 5, first_name: "Hugo", last_name: "Boss", reading_stage: 1});


  App.students = new App.Collections.Students();
  for(var i=0; i < App.Config.maxStudentCount; i = i+1){
    App.students.add(App.roster.at(i));
  }

  App.selectedStudent = App.students.at(0);
  App.selectedSkill = "";
  App.selectedStimulus = new App.Models.Stimulus({skill: "letter_names", value: "a"});


  // App.stimuli = new App.Collections.Stimuli({localStorageName: "stimuli"});
  App.stimuli = new App.Collections.Stimuli();
  // App.stimuli.fetch();
  App.roster.each(function(student) {
    var a, z, c, A, Z;
    var user_id= student.get("id");

    for(var stageIndex=1; stageIndex<10; stageIndex = stageIndex + 1){

      if(stageIndex===1){
        a="a".charCodeAt(0);
        z="c".charCodeAt(0);
        c;
        for( c = a; c <= z; c = c + 1) {
          App.stimuli.create({reading_stage: 1, skill:App.Config.skill.letterNames, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
        }

        A="A".charCodeAt(0);
        Z="C".charCodeAt(0);

        for(
          c=A; c<=Z;c=c+1) {
          App.stimuli.create({reading_stage: 1, skill:App.Config.skill.letterNames, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
        }
      }

      if(stageIndex===2){

        a="a".charCodeAt(0);
        z="c".charCodeAt(0);

        for( c = a; c <= z; c = c + 1) {
          App.stimuli.create({reading_stage: 2, skill:App.Config.skill.letterSounds, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
        }

        A="A".charCodeAt(0);
        Z="C".charCodeAt(0);

        for(
          c=A; c<=Z;c=c+1) {
          App.stimuli.create({reading_stage: 2, skill:App.Config.skill.letterSounds, value: String.fromCharCode(c), assessment:"clear", user_id: user_id});
        }

      }

      if(stageIndex===3){

        _.forEach(["b","c","d"], function(o) {
          App.stimuli.create({reading_stage: 3, skill: App.Config.skill.cvts, sub_skill: App.Config.skill.onsets, value: o, assessment:"clear", user_id: user_id});
        });

        _.forEach(["at","ap","ad"], function(o) {
          App.stimuli.create({reading_stage: 3, skill: App.Config.skill.cvts, sub_skill: App.Config.skill.rimes, value: o, assessment:"clear", user_id: user_id});
        });
      }


      if(stageIndex>3){
        a="a".charCodeAt(0);
        z="c".charCodeAt(0);
        c;
        for( c = a; c <= z; c = c + 1) {
          App.stimuli.create({reading_stage: stageIndex, skill:App.Config.skill.sightWords, value: String.fromCharCode(c)+"asdas", assessment:"clear", user_id: user_id});
        }

        _.forEach(["b","c","d"], function(o) {
          App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.onsets, value: o, assessment:"clear", user_id: user_id});
        });

        _.forEach(["at"+stageIndex,"ap","ad","am"], function(o) {
          App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.rimes, value: o, assessment:"clear", user_id: user_id});
        });
      }

      if(stageIndex>3 && stageIndex<8){
        _.forEach(["Dentist"+stageIndex,"Chores","Digging"], function(title) {
          App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.stageStories, value: title, assessment:"clear", user_id: user_id});
        });
      }

      _.forEach(["ltDentist"+stageIndex,"Chores","Digging"], function(title) {
        App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.leveledTexts, value: title, assessment:"clear", user_id: user_id});
      });
    }
  });
}

function  initializeStimuliFullTestData(){

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



