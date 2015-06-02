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
    storageLocalState: false,
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
  loggedInTeacher: null,
  selectedStudent: null,
  selectedActivity: null,
  selectedStimulus: null,
  selectedSkill: null,

  ActivityStimuli : {
    consonants: ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w"],

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
        rimes:
        {
          ape: ["cape","drape","grape","tape"],
          ate: ["ate","date","fate","gate","hate","late","plate","skate","state","nate"],
          ide: ["bride","glide","hide","pride","ride","side","slide","tide","wide"],
          ime: ["crime","dime","grime","lime","slime","time"],
          ine: ["dine","fine","line","mine","nine","pine","spine","vine","wine"],
          ipe: ["wipe","pipe","ripe"],
          ite: ["bite","kite","site","spite","white "],
          ode: ["code","mode","rode"],
          ome: ["dome","home"],
          one: ["bone","cone","lone","stone","tone","zone"],
          ope: ["hope","mope","rope","slope"],
          ote: ["note","vote","wrote"],
          ude: ["dude","rude","crude"],
          une: ["prune","tune"],
          ute: ["cute","flute","mute","lute"]
        },
        onsets:
        {
          bl: ["blade","blame","bled","blot"],
          br: ["brat","brim","bride"],
          cl: ["clam","clap","clip"],
          cr: ["crime","crop"],
          dr: ["drape","drip","drop"],
          fl: ["flame","flap","flat","fled","flip","flop","flute"],
          gl: ["glad","glide"],
          gr: ["grade","grape","grim","grime","grip","grin"],
          pl: ["plan","plop","plot","plum","plate"],
          pr: ["prop","pride","prune"],
          sl: ["slam","slap","sled","slide","slim","slime","slip","slit","slot"],
          tr: ["trade","trap","trim","trip"],
          sk: ["skin","skip","skit"],
          sp: ["spade","sped","spin","spine","spit","spot","spun"],
          st: ["state","stone","stop","stun"]
        }
      },
      6: {
        onsets:{

          ch: ["chain","chair","champ","charm","chart","chat","cheat","chill","chin","chip","choke","chop","chore"],
          sh: ["shack","shade","shake","shame","shape","","share","shark","shave","sheep","sheet","shine","ship","shook","shoot","shop","shore","shot","show","shut","shy","shall","shin","shout"],
          th: ["thank","thaw","then","thick","thin","thing","think"],
          wh: ["whale","wheat","wheel","when","while","what","white","why"]
        },
        rimes:{

          ack: ["back","black","crack","jack","lack","pack","rack","sack","shack","snack","track"],
          aid: ["braid","laid","paid","raid"],
          ail: ["fail","hail","jail","mail","nail","pail","rail","sail","snail","tail"],
          ain: ["brain","chain","drain","gain","grain","main","pain","plain","rain","stain","train"],
          air: ["chair","fair","flair","hair","pair","stair"],
          all: ["ball","call","fall","hall","mall","small","tall","wall"],
          amp: ["camp","champ","clamp","cramp","damp","lamp","ramp","stamp"],
          and: ["band","brand","grand","hand","land","sand","stand"],
          ang: ["bang","hang","gang","rang","sang"],
          ank: ["bank","crank","drank","sank","tank","thank","yank"],
          ant: ["ant","grant","pant","rant","slant","cant","want"],
          ar:  ["bar","car","far","jar","star","tar","war"],
          ay:  ["bay","clay","day","hay","lay","may","pay","play","ray","say","stay","tray","way"],
          ead: ["bead","lead","read"],
          eak: ["beak","bleak","freak","peak","sneak","speak","weak"],
          eam: ["beam","cream","dream","steam","team","gleam"],
          ear: ["clear","dear","fear","gear","hear","near","rear","spear","year"],
          eat: ["beat","cheat","heat","meat","neat","seat","treat","wheat"],
          eck: ["deck","neck","peck"],
          eed: ["bleed","deed","feed","freed","greed","need","seed","speed","weed"],
          eel: ["feel","heel","kneel","peel","reel","steel","wheel"],
          een: ["green","seen","teen","been"],
          eep: ["beep","creep","deep","jeep","keep","peep","sheep","sleep","steep","sweep","weep"],
          eet: ["beet","feet","fleet","greet","meet","sheet","street"],
          ell: ["bell","fell","sell","smell","spell","tell","well","yell"],
          end: ["bend","blend","lend","mend","send","spend"],
          ent: ["bent","cent","dent","lent","rent","sent","spent","tent","vent","went"],
          ick: ["brick","click","kick","lick","nick","sick","stick","thick","tick","trick"],
          ill: ["bill","chill","drill","fill","hill","kill","pill","skill","spill","still","will"],
          ing: ["bring","fling","king","ring","sing","sting","thing","wing"],
          ink: ["drink","link","mink","pink","rink","sink","stink","think","wink","blink"],
          int: ["flint","hint","lint","mint","print","tint"],
          oad: ["load","road","toad"],
          oan: ["groan","loan","moan"],
          oat: ["boat","coat","float","goat","moat","oat"],
          ock: ["block","clock","dock","flock","lock","rock","sock","stock"],
          oil: ["boil","broil","coil","soil","spoil","toil"],
          ong: ["long","song"],
          ood: ["good","hood","stood","wood"],
          ook: ["book","cook","crook","hook","look","shook","took"],
          ool: ["fool","pool","stool","tool","cool"],
          oom: ["boom","broom","groom","room","zoom"],
          oon: ["moon","noon","soon","spoon"],
          oop: ["goop","hoop","loop"],
          oot: ["boot","hoot","root","scoot","shoot","toot"],
          out: ["out","pout","shout","spout","trout"],
          oy:  ["boy","coy","joy","toy"],
          uck: ["buck","duck","luck","stuck","truck","tuck"],
          ump: ["bump","dump","grump","jump","lump","plump","pump","slump"],
          ung: ["hung","lung","stung","sung"],
          unk: ["bunk","dunk","junk","punk","skunk","spunk","sunk","trunk"],
          unt: ["bunt","grunt","hunt","punt","runt","shunt","stunt"],
          y:   ["by","cry","dry","fly","my","shy","sky","spy","try","why"]
        }
      },
      7: {
        onsets: {
          spr: ["spring","sprint","sprang"],
          str: ["string","stray","stripe"]
        },
        rimes: {
          ab:  ["cab","tab","dab","jab","grab","crab","slab"],
          ace: ["brace","face","grace","lace","pace","place","race","space","trace"],
          ag:  ["bag","brag","drag","flag","nag","rag","sag","snag","tag","wag","zag"],
          age: ["page","rage","stage","wage"],
          ake: ["bake","brake","cake","fake","flake","lake","make","rake","shake","snake","stake","take","wake"],
          ale: ["male","pale","stale","tale","whale"],
          ard: ["card","hard","lard","shard","yard"],
          are: ["bare","care","dare","rare","share","spare","stare","glare"],
          ark: ["bark","dark","mark","park","shark","spark"],
          arm: ["charm","farm","harm","warm"],
          art: ["cart","chart","dart","part","smart","start","mart"],
          ase: ["base","case","vase","chase"],
          ave: ["cave","gave","grave","pave","save","shave","slave","wave"],
          aze: ["daze","maze","gaze","haze","blaze","glaze","graze","craze"],
          eg:  ["beg","leg","peg"],
          elt: ["belt","felt","melt"],
          ib:  ["rib","bib","fib","crib"],
          ibe: ["bribe","tribe"],
          ice: ["mice","nice","price","rice","slice","spice"],
          ig:  ["big","dig","fig","pig","wig"],
          ike: ["bike","dike","hike","like","pike"],
          ile: ["file","mile","pile","smile","tile","while"],
          ilk: ["milk","silk"],
          ire: ["tire","wire","hire",""],
          ive: ["dive","drive","five","hive","live"],
          ix:  ["fix","mix","six"],
          ob:  ["mob","cob","job","slob","blob","snob"],
          obe: ["lobe","robe","globe","probe"],
          og:  ["fog","frog","hog","jog","log"],
          oke: ["choke","joke","poke","smoke","spoke","woke"],
          old: ["bold","cold","fold","gold","hold","mold","sold","told"],
          ole: ["hole","mole","pole","role","sole","stole","whole"],
          ore: ["bore","chore","core","more","shore","sore","store","tore","wore"],
          orn: ["born","corn","horn","torn","worn"],
          ose: ["close","hose","nose","pose","rose","those"],
          ox:  ["box","fox"],
          ub:  ["cub","hub","pub","rub","snub","sub","tub"],
          ube: ["cube","tube"],
          ug:  ["bug","dug","hug","jug","plug","rug","slug","snug","tug"],
          ule: ["mule","rule"],
          urn: ["burn","churn","spurn","turn"]
        }
      },
      8: {
        onsets: {

        },
        rimes: {
          ash: ["bash","cash","dash","flash","mash","rash","slash","smash","trash","wash"],
          aw : ["claw","draw","jaw","paw","raw","saw","thaw"],
          est: ["best","chest","nest","pest","rest","test","vest","west"],
          ew : ["blew","crew","flew","grew","knew","stew","dew","new","drew","few"],
          ight:["fight","light","might","night","right","sight","tight"],
          ish: ["dish","fish","wish"],
          ost: ["cost","frost","lost","most"],
          ould:["should","could","would"],
          ound:["bound","round","pound","found","mound"],
          ow : ["blow","bow","crow","know","low","mow","row","show","slow","snow","tow","grow","how","now","wow","cow"],
          ush: ["blush","brush","crush","flush","hush","mush","rush","slush","push"],
          ust: ["bust","crust","dust","gust","just","must","rust","trust"]
        }
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
};
