var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    el: "#applicationContainer",
    productionApiUrl: "https://www.tutormate.org/api/v1",
    stagingApiUrl: "http://staging.tutormate.org/api/v1",
    developmentApiUrl: "http://localhost:3000/api/v1",
    tutormateUrl: function() {
      if (is_browser && !App.debuggingProduction) {
        return "http://staging.tutormate.org";
      } else {
        return "https://www.tutormate.org";
      }
    },
    maxStudentCount: 6,
    maxStageCount: 9,
    minReadingStageForStrategies: 4,
    firstStageWithSubSkill: 3,
    storageLocalState: false,
    maxDaysSinceSuccessfulFullSync: 3,
    stimuliModelsPerStudent: 434,
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
    errorCode: {
      stimuliTotalCountInconsistent: 1000 - 1,
      stimuliDatabaseCountInconsistent: 1000 - 2
    }
  },

  debuggingProduction: false,

  url: function() {
    if (is_browser && !App.debuggingProduction) {
      return "http://staging.tutormate.org/api/v1";
    } else {
      return "https://www.tutormate.org/api/v1";
    }
  },
  clientLastFetchedAt: "",
  notesLastTakenAt: "",
  resp:{},
  online: true,
  currentTeacher: null,
  selectedStudent: null,
  selectedActivity: null,
  selectedStimulus: null,
  selectedSkill: null,
  browser: null,

  isOnline: function() {
    if (is_browser) {
      return window.navigator.onLine;
    } else {
      return navigator.connection.type !== Connection.NONE;
    }
  },

  newISODate: function() {
    return moment().utc().toISOString();
  },

  logRemoteSaveError: function(response) {
    var description = (this.description ? this.description : response.description);
    var request_type = (this.request_type ? this.request_type : response.request_type);
    var request_resource = (this.request_resource ? this.request_resource : response.request_resource);
    console.log("logRemoteSaveError:", response.status, description);

    var error = new App.Models.NetworkError({
      "user_id": App.currentTeacher.id,
      "requested_at": moment.utc().toISOString(),
      "request_type": request_type,
      "request_resource": request_resource,
      "description": description,
      "status_code": response.status,
      "mac_address": "",
      "archived": false,
      "test": false
    });

    App.networkErrors.add(error);
    error.save();
  },

  logRemoteSyncError: function(collection, response, options, description) {
    console.log("logRemoteSyncError:", collection, response, options, description);

    var error = new App.Models.NetworkError({
      "user_id": App.currentTeacher.id,
      "requested_at": moment.utc().toISOString(),
      "request_type": "GET",
      "request_resource": collection.url(),
      "description": description,
      "status_code": response.status,
      "mac_address": "",
      "archived": false,
      "test": false
    });

    App.networkErrors.add(error);
    error.save();
    App.remoteSyncErrorEncountered = true;
  },

  clearRemoteSyncError: function() {
    App.remoteSyncErrorEncountered = false;
  },

  getRemoteSyncErrorState: function() {
    return App.remoteSyncErrorEncountered;
  },

  ActivityStimuli: {
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
        rimes: {
          at: ["bat","cat","fat","hat","mat","rat","sat","vat"],
          et: ["bet","get","jet","let","met","net","pet","set","wet"],
          it: ["bit","fit","kit","pit","sit"],
          ot: ["dot","hot","lot","not","tot"],
          ut: ["but","cut","nut","hut"]
        }
      },
      4: {
        rimes: {
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
        sight: ["a","and","ball","be","blue","by","do","for","funny","green","has","he","house","is","like","little","me","my","no","play","said","school","see","she","the","they","to","toy","we","why"]
      },
      5: {
        rimes: {
          ape: ["cape","drape","grape","tape"],
          ade: ["fade", "made", "blade", "grade", "trade", "spade", "shade"],
          ame: ["came", "fame", "game", "name", "same", "blame", "flame", "shame"],
          ane: ["cane", "lane"],
          ate: ["date","fate","gate","hate","late","plate","skate","state","nate"],
          ide: ["bride","glide","hide","pride","ride","side","slide","tide","wide"],
          ime: ["crime","dime","grime","lime","slime","time"],
          ine: ["dine","fine","line","mine","nine","pine","spine","vine","wine"],
          ipe: ["wipe","pipe","ripe"],
          ite: ["bite","kite","site","spite","white"],
          ode: ["code","mode","rode"],
          ome: ["dome","home"],
          one: ["bone","cone","lone","stone","tone","zone"],
          ope: ["hope","mope","rope","slope"],
          ote: ["note","vote","wrote"],
          ude: ["dude","rude","crude"],
          une: ["prune","tune"],
          ute: ["cute","flute","mute","lute"]
        },
        onsets: {
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
        },
        sight: ["any", "all", "are", "as", "away", "boy", "could", "find", "girl", "go", "good", "just", "have", "here", "help", "her", "I", "has", "look", "read", "so", "saw", "with", "eat", "jump", "out", "ask", "keep", "you", "who"]
      },
      6: {
        onsets: {
          ch: ["chain","chair","champ","charm","chart","chat","cheat","chill","chin","chip","choke","chop","chore"],
          sh: ["shack","shade","shake","shame","shape","share","shark","shave","sheep","sheet","shine","ship","shook","shoot","shop","shore","shot","show","shut","shy","shall","shin","shout"],
          th: ["thank","thaw","then","thick","thin","thing","think"],
          wh: ["whale","wheat","wheel","when","while","what","white","why"]
        },
        rimes: {
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
        },
        sight: ["after","about","because","don’t","fast","five","four","from","goes","how","I’m","its","going","book","laugh","now","one","our","but","six","some","three","too","want","will","into","was","were","what"]
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
        },
        sight: ["around","began","black","brown","chair","color","every","feet","fish","hair","hear","lost","must","night","other","please","purple","road","sleep","stay","tell","them","thing","took","truck","wall","when","wish","would","your"]

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
        },
        sight:["again","often","best","always","know","love","much","that","two","been","come","had","many","did","him","over","pretty","if","or","not","stop","thank","then","think","of","under","his","where","woman","us"]
      },
      9: {
        sight: ["animal","back","yes","bring","catch","cold","down","father","first","than","happy","long","mother","next","once","until","never","ready","each","soon","street","their","there","this","tree","very","went","does","work","through"]
      }
    },

    phrasesByStage: {
      3: {
        rimes: {
          at: ['The cat ate a rat.','My hat is on the mat.','That is my bat.'],
          et: ['Can I get that?','Set the net there.','I am not wet yet.'],
          it: ['I bit into the pit.','Quit it please.','Sit here and do not hit.'],
          ot: ['I got a lot of toys.','This is not your spot.','That pot is very hot.'],
          ut: ['Shut the book and put it down.','I cut that out.','I want to but my mom said no.']
        }
      },
      4: {
        rimes: {
          ad: ['Dad is mad.','I feel sad.','This smells bad.'],
          am: ['I like to eat ham.','Jam got on my book.','Can we have ham please?'],
          an: ['Mom has a tan van.','The pan is hot.','The man ran up the street.'],
          ap: ['The boy wears a red cap.','It is nap time.','My dog is in my lap.'],
          at: ['The cat ate a rat.','My hat is on the mat.','That is my bat.'],
          ed: ['Go to bed.','He has a red ball.','I fed the dog.'],
          em: ['How low is your hem?','What a pretty gem!','We saw them.'],
          en: ['My pen is blue.','The hen sat on the egg.','I am ten.'],
          ep: ['He has a lot of pep.','He sat on the step.','Go to the next step.'],
          et: ['Can I get that?','Set the net there.','I am not wet yet.'],
          id: ['The kid hid under there.','I did not do it.','I am a big kid.'],
          im: ['I thank him.','It is dim in here.','The ball hit the rim.'],
          in: ['The bin is brown.','Did you win?','What is in the tin?'],
          ip: ['The tip is going to rip.','Zip it up.','My lip is red.'],
          it: ['I bit into the pit.','Quit it please.','Sit here and do not hit.'],
          od: ['I will nod yes.','Do you eat cod?','That is a long rod.'],
          om: ['I love my mom.','Mom and i have brown hair.','Where did mom go?'],
          on: ['Who won?','He is my son.','I have a ton to do.'],
          op: ['I hop to the top.','Get the mop for me.','I hear a pop.'],
          ot: ['I got a lot of toys.','This is not your spot.','That pot is very hot.'],
          ud: ['Don’t go in the mud.','I see a bud in the tree.','I like to play in mud.'],
          um: ['You may not have gum.','I hum with the song.','The gum is green.'],
          un: ['It is fun to play.','The sun is out.','Do you want to run there?'],
          up: ['My pup is brown.','What is in the cup?','The pup is by the cup.'],
          ut: ['Shut the book and put it down.','I cut that out.','I want to but my mom said no.']
        }
      },
      5: {
        rimes: {
          ade: ['I made a plan.','The sun makes it fade.','We wade in the pool.'],
          ame: ['They came to the shop.','Do not blame me.','I like to play this game.'],
          ane: ['The man walks with a cane.','Stay in your lane.','This is a weather vane.'],
          ape: ['I ate a grape.','Batman wears a cape.','Tape up the box.'],
          ate: ['I ate a date.','What state do you live in?','I hate to be late.'],
          ide: ['Do you want to hide?','Go down the slide.','We ride to my house.'],
          ime: ['Do you have a dime?','What time is it?','That lime is very green.'],
          ine: ['I am fine.','That toy is mine.','I have nine books.'],
          ipe: ['Does it look ripe?','Jump over the pipe.','Wipe that up.'],
          ite: ['I took a bite.','We have a white cat.','Do you see the kite?'],
          ode: ['We rode to the house.','What is the code?','I rode down the street.'],
          ome: ['Can we go home?','They play under the dome.','My home is big.'],
          one: ['That stone is very big.','I don’t like your tone.','Look out for the cone.'],
          ope: ['I hope we can go.','Take the rope.','Don’t mope around.'],
          ote: ['I wrote a note to him.','We will vote on this.','She gave me a note.'],
          ude: ['It is rude to yell.','That dude is tall.','Don’t be rude to her.'],
          une: ['Can you sing a tune?','My dad eats a prune.','I hear the tune.'],
          ute: ['That dog is so cute.','She plays the flute.','Mute the tv.']
        },
        onsets: {
          bl: '',
          br: '',
          cl: '',
          cr: '',
          dr: '',
          fl: '',
          gl: '',
          gr: '',
          pl: '',
          pr: '',
          sl: '',
          tr: '',
          sk: '',
          sp: '',
          st: ''
        }
      },
      6: {
        onsets: {
          ch: '',
          sh: '',
          th: '',
          wh: ''
        },
        rimes: {
          ack: ['Back to school.','The dog is black.','Place that there.'],
          aid: ['She laid the doll down.','He paid for the book.','I have a long braid.'],
          ail: ['The mail is here.','The dog’s tail wags.','I will not fail.'],
          ain: ['The man is in pain.','Do you hear the rain?','The train is long.'],
          air: ['Sit in your chair.','My hair is black.','I fell off the stair.'],
          all: ['Catch the small ball.','The mall is down the street.','You are very tall.'],
          amp: ['I want to go to camp.','My lamp is on.','Just go up the ramp.'],
          and: ['The sand is brown.','Stand there please.','My hand is little.'],
          ang: ['Please hang up your coat.','The phone rang.','He sang a song.'],
          ank: ['He drank a big cup of tea.','Thank you for the book.','My dad works at a bank.'],
          ant: ['I can’t do it.','Do you want to help?','The ant goes up the hill.'],
          ar:  ['Is the car far away?','I see a star in the sky.','Take this jar.'],
          ay:  ['You may play with her.','Stay out of my way.','What day is it?'],
          ead: ['Read a book.','Lead the way.','Can we read this?'],
          eak: ['Speak up please.','The boy is weak.','The bird’s beak is black.'],
          eam: ['My team won.','What was your dream about?','I love ice cream.'],
          ear: ['Do you hear that?','Is the truck near?','Next year we will go.'],
          eat: ['This meat is good.','I will not cheat.','Take a seat here.'],
          eck: ['We sit on the deck.','Look at my neck.','Mom gave dad a peck.'],
          eed: ['I feed the cat.','The weed is green.','I need that toy.'],
          eel: ['I feel sad.','The truck has a black wheel.','Kneel down please.'],
          een: ['My house is green.','Have you seen dad.','We have been here.'],
          eep: ['The jeep went beep.','Go to sleep.','Keep it down.'],
          eet: ['Go down the street.','His feet are big.','I will meet her.'],
          ell: ['I hear the bell.','He fell on the street.','Please don’t yell.'],
          end: ['Send it there.','I bend down.','Lend me your pen.'],
          ent: ['We went to school.','She sent me a book.','That thing is bent.'],
          ick: ['I think I am sick.','Kick the ball.','That is a thick stick.'],
          ill: ['I will still play.','Don’t spill that.','We go up the big hill.'],
          ing: ['Bring the ring here.','What is that thing?','It can sting you.'],
          ink: ['What is the pink drink?','I think the sink is there.','Did you wink at me?'],
          int: ['Can I have a hint?','This mint is good.','Mom will print that.'],
          oad: ['This road is long.','Look at the toad.','That is a big load.'],
          oan: ['Can you loan me a book?','I moan about it.','Do not groan please.'],
          oat: ['Put on your coat.','The boat can float.','We saw a goat.'],
          ock: ['Put on your sock.','Don’t block the clock.','Mom will lock up.'],
          oil: ['Play in the soil.','Boil that food.','Don’t spoil it.'],
          ong: ['This song is very long.','Do you hear the song?','That is a long fish.'],
          ood: ['This is a good book.','Put up your hood.','He stood by me.'],
          ook: ['She took my book.','Can we cook now?','I look at the hook.'],
          ool: ['I jump into the pool.','This is a cool toy.','The stool is out.'],
          oom: ['I zoom around the room.','The broom is over there.','Did you hear that boom?'],
          oon: ['I wish I could go to the moon.','We will eat at noon.','Soon I have to go.'],
          oop: ['Look at this goop.','The ball went through the hoop.','The loop goes around me.'],
          oot: ['Where is my other boot?','Scoot over please.','The tree has a big root.'],
          out: ['Do not shout out.','I pout when I am sad.','Take out the book.'],
          oy:  ['The boy has a toy.','It is a joy to be here.','The boy plays with a ball.'],
          uck: ['It is bad luck to get stuck.','Can you tuck me in?','The duck is in the truck.'],
          ump: ['I have a bump on my leg.','I jump around.','Dump your books here.'],
          ung: ['I hung up my coat.','The bee stung me.','I have sung a song.'],
          unk: ['That trunk has junk in it.','Look out for the skunk.','I dunk the ball.'],
          unt: ['The pig let out a grunt.','My dad will hunt for it.','This dog is the little runt.'],
          y:   ['Sit by my mother.','I see a fly in the sky.','Why don’t you try?']
        }
      },
      7: {
        onsets: {
          spr: '',
          str: ''
        },
        rimes: {
          ab:  ['Grab the cab.','The crab is red.','Just a dab.'],
          ace: ['Wash my face.','The race is here.','Place that there.'],
          ag:  ['My bag is at school.','We play tag.','The flag is red.'],
          age: ['We read that page.','He fell off the stage.','What page are we on?'],
          ake: ['Mom will bake a cake.','The lake is blue.','Do not take my rake.'],
          ale: ['My dad is a male.','That whale is so big.','Mom told me a tale.'],
          ard: ['Go play in the yard.','This chair is hard.','She gave me a card.'],
          are: ['Share your toys.','Do not stare.','Mom takes care of me.'],
          ark: ['I hear my dog bark.','It is dark in here.','We play in the park.'],
          arm: ['The farm has pigs.','It is warm out here.','Do you live on a farm?'],
          art: ['I sit in the cart.','This part is fun.','Start again please.'],
          ase: ['I ran to the base.','Don’t chase me.','Where is my case?'],
          ave: ['I gave a wave to Mom.','What is in the cave?','Save the boy.'],
          aze: ['This is a hard maze.','I am in a daze.','The fire will blaze.'],
          eg:  ['Don’t beg me.','My leg is here.','I beg mom for a toy.'],
          elt: ['Dad has a brown belt.','I felt happy.','When will the snow melt?'],
          ib:  ['I don’t sleep in a crib.','Where is my rib?','The bib is green.'],
          ibe: ['This is my tribe.','I saw a scribe','The toy was a bribe.'],
          ice: ['Did you see the mice?','I eat rice.','Be nice to him.'],
          ig:  ['Dig here for the tree.','That cat is very big.','The pig is funny.'],
          ike: ['I got a red bike.','Take a hike.','I like you.'],
          ile: ['His house is one mile away.','I smile at her.','There is a pile of books.'],
          ilk: ['I like milk.','That is made of silk.','I will ask for milk.'],
          ire: ['The wire is black.','My ball went under the truck’s tire.','That is a big fire.'],
          ive: ['I am five.','We drive up the street.','Can you dive?'],
          ix:  ['Dad will fix it.','Mix this up.','He is six now.'],
          ob:  ['The job began.','I am a slob.','Do not be a snob.'],
          obe: ['Mom has a blue robe.','The globe is big.','Don’t probe him.'],
          og:  ['I can’t see in the fog.','Jog down here.','The frog jumps over the log.'],
          oke: ['It was a funny joke.','He woke me up.','Mom spoke to the boy.'],
          old: ['Are you cold.','Can I hold her?','She told me not to go.'],
          ole: ['Look out for the hole.','He stole that toy.','I want the whole thing.'],
          ore: ['I have one more chore to do.','Mom went to the store for more things.','I wore a blue hat.'],
          orn: ['A new dog was born.','Do you like to eat corn?','The horn went beep.'],
          ose: ['I see a red rose.','Close those books.','My nose is little.'],
          ox:  ['That is a big box.','The fox is red.','The fox plays in the box.'],
          ub:  ['Get in the tub.','I rub my leg.','The cub goes by its mother.'],
          ube: ['I put the red cube here.','That is a big tube.','I sit on the cube.'],
          ug:  ['I dug in the mud to find a bug.','I want a hug to feel snug.','I won’t tug on the rug.'],
          ule: ['The mule is brown.','Did you hear the rule?','I don’t like this rule.'],
          urn: ['It is my turn.','Don’t burn the house down.','Turn around please.']
        }
      },
      8: {
        onsets: {

        },
        rimes: {
          ash: ['We need cash to pay.','Take the trash out.','Smash the bug.'],
          aw:  ['The dog’s paw is small.','I saw the snow thaw.','Draw a red truck.'],
          est: ['Do your best.','Can I rest?','We have a test.'],
          ew:  ['I knew it.','He got a new fish.','We drew a few trees.'],
          ight:['Do not fight.','There is no light in the night.','What a sight!'],
          ish: ['Do you eat fish?','I wish I could keep it.','I will bring a dish.'],
          ost: ['How much does it cost?','I lost my dog.','I love you the most.'],
          ould:['Should we go to school?','I could help you.','I would like to stay.'],
          ound:['The ball is round.','I found my toy.','We are bound for school.'],
          ow:  ['I will tow the car.','I know to go slow here.','Look at the snow now.'],
          ush: ['Brush your hair.','Don’t push him.','We rush over and hush.'],
          ust: ['I don’t like the crust.','Just trust me.','We must dust the house.']
        }
      }
    }
  }
};
