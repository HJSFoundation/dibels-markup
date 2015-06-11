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
  xhr = sinon.useFakeXMLHttpRequest();
  requests = [];
  xhr.onCreate = function(xhr) {
    requests.push(xhr);
  };
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

  App.url = "http://tutormate.org/api/v1";

  App.loggedInTeacher = {id: 313, classroom_id: 91};

  App.notes = new App.Collections.Notes();

  // App.students = new App.Collections.Students({localStorageName: "students"});
  App.roster = new App.Collections.Students();
  // App.roster.fetch();
  App.roster.create({id: 1, first_name: "Bernie", last_name: "Bivins", reading_stage: 7});
  App.roster.create({id: 2, first_name: "Clark", last_name: "Kempt", reading_stage: 3});
  App.roster.create({id: 3, first_name: "Princess", last_name: "Peach", reading_stage: 2});
  App.roster.create({id: 4, first_name: "Clint", last_name: "Eastman", reading_stage: 4});
  App.roster.create({id: 5, first_name: "Hugo", last_name: "Boss", reading_stage: 1});
  App.roster.create({id: 6, first_name: "Last", last_name: "Student", reading_stage: 1});

  App.students = new App.Collections.Students();
  for(var i=0; i < App.Config.maxStudentCount; i = i+1){
    App.students.add(App.roster.at(i));
  }

  App.selectedStudent = App.students.at(0);
  App.selectedSkill = "";

  App.roster.create({id: 18, first_name: "Some", last_name: "Guy", reading_stage: 5});

  App.conferences = new App.Collections.Conferences();
  App.conferences.add({
    "id": 76,
    "classroom_id": 91,
    "name": "Clark Kempt",
    "conference_type": "user",
    "weight": 5,
    "number_per_week": 3,
    "last_conference_date": new Date(),
    "test": false,
    "archived": false,
    "updated_at": "2015-05-28T20:50:29.060Z",
    "created_at": "2015-05-28T20:50:29.060Z",
    "user_ids": [
      2
    ]}
  );

  App.conferences.add({
    "id": 43,
    "classroom_id": 91,
    "name": "Some Guy",
    "conference_type": "user",
    "weight": 5,
    "number_per_week": 3,
    "last_conference_date": new Date(),
    "test": false,
    "archived": false,
    "updated_at": "2015-05-28T20:50:29.060Z",
    "created_at": "2015-05-28T20:50:29.060Z",
    "user_ids": [
      18
    ]}
  );

  App.conferences.add({
    "id": 97,
    "classroom_id": 91,
    "name": "Ledner, Schuppe and Jacobi",
    "conference_type": "group",
    "weight": 6,
    "number_per_week": 2,
    "last_conference_date": new Date(),
    "test": false,
    "archived": false,
    "updated_at": "2015-05-28T20:50:29.535Z",
    "created_at": "2015-05-28T20:50:29.535Z",
    "user_ids": [
    1,
    3
    ]
  });

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

        _.each(App.ActivityStimuli.wordsByStage[2], function(value,key){
          App.stimuli.create({reading_stage: 2, skill:App.Config.skill.letterSounds, value: key, assessment:"clear", user_id: user_id});
        });
      }

      if(stageIndex===3){

        _.forEach(["at","et","it","ot","ut"], function(o) {
          App.stimuli.create({reading_stage: 3, skill: App.Config.skill.cvts, sub_skill: App.Config.skill.rimes, value: o, assessment:"clear", user_id: user_id});
        });
      }

      if(stageIndex===4){

        a="a".charCodeAt(0);
        z="c".charCodeAt(0);
        c;
        for( c = a; c <= z; c = c + 1) {
          App.stimuli.create({reading_stage: stageIndex, skill:App.Config.skill.sightWords, value: String.fromCharCode(c)+"asdas", assessment:"clear", user_id: user_id});
        }


        _.forEach(App.ActivityStimuli.wordsByStage[stageIndex], function(o,key) {
          App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.rimes, value: key, assessment:"clear", user_id: user_id});
        });
      }

      if(stageIndex>4){
        a="a".charCodeAt(0);
        z="c".charCodeAt(0);
        c;
        for( c = a; c <= z; c = c + 1) {
          App.stimuli.create({reading_stage: stageIndex, skill:App.Config.skill.sightWords, value: String.fromCharCode(c)+"asdas", assessment:"clear", user_id: user_id});
        }

        if(stageIndex<9){

          _.forEach(App.ActivityStimuli.wordsByStage[stageIndex]["onsets"], function(o,key) {
            App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.onsets, value: key, assessment:"clear", user_id: user_id});
          });

          _.forEach(App.ActivityStimuli.wordsByStage[stageIndex]["rimes"], function(o,key) {
            App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.rimes, value: key, assessment:"clear", user_id: user_id});
          });
        }
      }
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
    }
  });
}



