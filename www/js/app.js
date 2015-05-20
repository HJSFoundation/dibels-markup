var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    el: "#applicationContainer",
    productionApiUrl: "",
    stagingApiUrl: "http://staging.tutormate.org/api/v1",
    developmentApiUrl: "http://localhost:3000/api/v1",
    maxStudentCount: 6,
    maxStageCount: 9,
    minReadingStageForStrategies: 4,
    storageLocalState: true,
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
      leveledTexts: "leveled_texts",
      readingStrategies: "reading_strategies"
    },
  },
  url: "http://staging.tutormate.org/api/v1",
  currentUser: null,
  selectedStudent: null,
  selectedActivity: null,
  selectedStimulus: null,
  selectedSkill: null,

  ActivityStimuli : {
    wordsByStage: {
      2: { // 17 consonants
        b: ["bat", "bet", "bit", "but"],
        c: ["cat", "cot", "cut"],
        d: ["dot", "dog", "dip"],
        f: ["fat", "fit", "fun"],
        g: ["get", "got", "gap"],
        h: ["hat", "hit", "hot", "hut"], 
        j: ["jet", "jug", "jam"],
        k: ["kit", "kin", "kid"],
        l: ["let", "lot", "lit"],
        m: ["mat", "met", "man"],
        n: ["net", "not", "nut"], 
        p: ["pat", "pet", "pit", "pot"],  
        r: ["rat", "rap", "rot"],
        s: ["sat", "set", "sit"], 
        t: ["tot", "tan", "tin"],
        v: ["vat", "vet", "van"],
        w: ["wet", "wit", "win"]
      },
      3: {
        at: ["bat","cat","fat","hat","mat","rat","sat","vat"],
        et: ["bet","get","jet","let","met","net","pet","set","wet"],
        it: ["bit","fit","kit","pit","sit"],
        ot: ["dot","hot","lot","not","tot"],
        ut: ["but","cut","nut","hut"]
      },
      4: {
        ad: ["bad","dad","mad","pad","sad"],
        am: ["dam","ham","jam"],
        an: ["ban","can","fan","man","pan","ran","tan","van"],
        ap: ["cap","lap","map","nap","rap","tap","zap"],
        at: ["cat","mat","hat","bat","nat","fat","rat","sat","vat","pat"],
        ed: ["bed","fed","led","red"],
        em: ["gem","hem"],
        en: ["den","hen","men","pen","ten"],
        ep: ["pep"],
        et: ["bet","get","jet","let","met","net","pet","set","vet","wet"],
        id: ["kid","bid","hid","did"],
        im: ["dim","him","rim"],
        in: ["bin","fin","pin","tin","win"],
        ip: ["dip","hip","lip","rip","tip","zip"],
        it: ["bit","fit","kit","lit","pit","sit"],
        od: ["nod","rod","cod"],
        om: ["mom","pom"],
        on: ["won","ton","son"],
        op: ["hop","mop","pop","top"],
        ot: ["cot","dot","got","hot","lot","not","pot","rot","tot"],
        ud: ["mud","bud","cud"],
        um: ["bum","gum","hum"],
        un: ["bun","fun","run","sun"],
        up: ["cup","pup"],
        ut: ["but","cut","gut","hut","nut","rut"]      
      },
      5: {
        at: ["bat","cat","fat","hat","mat","rat","sat","vat"],
        et: ["bet","get","jet","let","met","net","pet","set","wet"],
        it: ["bit","fit","kit","pit","sit"],
        ot: ["dot","hot","lot","not","tot"],
        ut: ["but","cut","nut","hut"]
      },
      6: {
        at: ["bat","cat","fat","hat","mat","rat","sat","vat"],
        et: ["bet","get","jet","let","met","net","pet","set","wet"],
        it: ["bit","fit","kit","pit","sit"],
        ot: ["dot","hot","lot","not","tot"],
        ut: ["but","cut","nut","hut"]
      },
      7: {
        at: ["bat","cat","fat","hat","mat","rat","sat","vat"],
        et: ["bet","get","jet","let","met","net","pet","set","wet"],
        it: ["bit","fit","kit","pit","sit"],
        ot: ["dot","hot","lot","not","tot"],
        ut: ["but","cut","nut","hut"]
      },
      8: {
        at: ["bat","cat","fat","hat","mat","rat","sat","vat"],
        et: ["bet","get","jet","let","met","net","pet","set","wet"],
        it: ["bit","fit","kit","pit","sit"],
        ot: ["dot","hot","lot","not","tot"],
        ut: ["but","cut","nut","hut"]
      },
      9: {
        at: ["bat","cat","fat","hat","mat","rat","sat","vat"],
        et: ["bet","get","jet","let","met","net","pet","set","wet"],
        it: ["bit","fit","kit","pit","sit"],
        ot: ["dot","hot","lot","not","tot"],
        ut: ["but","cut","nut","hut"]
      }
    }
  },

  initializeStudentTestData: function(){

    localStorage.clear();

    App.roster = new App.Collections.Students();
    // App.roster.fetch();
    App.roster.create({id: 1, first_name: "Bernie", last_name: "Bivins", reading_stage: 7});
    App.roster.create({id: 2, first_name: "Clark", last_name: "Kempt", reading_stage: 3});
    App.roster.create({id: 3, first_name: "Princess", last_name: "Peach", reading_stage: 2});
    App.roster.create({id: 4, first_name: "Clint", last_name: "Eastman", reading_stage: 4});
    App.roster.create({id: 5, first_name: "Hugo", last_name: "Boss", reading_stage: 1});
    App.roster.create({id: 6, first_name: "Last", last_name: "Student", reading_stage: 5});
  },

  initializeStimuliTestData: function  (){

  // App.stimuli = new App.Collections.Stimuli({localStorageName: "stimuli"});
  App.stimuli = new App.Collections.Stimuli();
  // App.stimuli.fetch();
  App.roster.each(function(student) {
    var a, z, c, A, Z;
    var user_id= student.get("id");

    App.stimuli.create({reading_stage: 4, skill: App.Config.skill.readingStrategies, sub_skill: "chunking_one_syllable_words", value: "Chunking one syllable words", assessment:"mastered", user_id: user_id});
    App.stimuli.create({reading_stage: 5, skill: App.Config.skill.readingStrategies, sub_skill: "flipping_vowel_sounds", value: "Flipping vowel sounds", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 5, skill: App.Config.skill.readingStrategies, sub_skill: "skipping_and_returning", value: "Skipping and returning", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 6, skill: App.Config.skill.readingStrategies, sub_skill: "listening_and_self_correcting", value: "Listening and self-correcting", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 7, skill: App.Config.skill.readingStrategies, sub_skill: "reading_smoothly_and_expressively", value: "Reading smoothly and expressively", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 7, skill: App.Config.skill.readingStrategies, sub_skill: "paying_attention_to_punctuation", value: "Paying attention to punctuation", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 7, skill: App.Config.skill.readingStrategies, sub_skill: "visualizing", value: "Visualizing", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 8, skill: App.Config.skill.readingStrategies, sub_skill: "predicting_and_asking_questions", value: "Predicting and asking questions", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 8, skill: App.Config.skill.readingStrategies, sub_skill: "identifying_affixes", value: "Identifying affixes", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 9, skill: App.Config.skill.readingStrategies, sub_skill: "chunking_multi_syllable_words", value: "Chunking multi syllable words", assessment:"clear", user_id: user_id});
    App.stimuli.create({reading_stage: 9, skill: App.Config.skill.readingStrategies, sub_skill: "making_inferences", value: "Making inferences", assessment:"clear", user_id: user_id});


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

        _.forEach(["b","c","d"], function(o) {
          App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.onsets, value: o, assessment:"clear", user_id: user_id});
        });

        _.forEach(["at"+stageIndex,"et","it","ot","ut"], function(o) {
          App.stimuli.create({reading_stage: stageIndex, skill: App.Config.skill.onsetRimes, sub_skill: App.Config.skill.rimes, value: o, assessment:"clear", user_id: user_id});
        });
      }



    }
  });

  }
};
