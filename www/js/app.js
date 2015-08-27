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
    tutormateUrl: function(){
      if(is_browser){
        return "http://staging.tutormate.org";
      }else{
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
      stimuliTotalCountInconsistent: 1000-1
    }
  },
  url: function() {
    if (is_browser) {
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
          at: ['the cat ate a rat','my hat is on the mat','that is my bat'],
          et: ['can I get that','set the net there','I am not wet yet'],
          it: ['I bit into the pit','quit it please','sit here and do not hit'],
          ot: ['I got a lot of toys','this is not your spot','that pot is very hot'],
          ut: ['shut the book and put it down','I cut that out','I want to but my mom said no']
        }
      },
      4: {
        rimes: {
          ad: ['dad is mad','I feel sad','this smells bad'],
          am: ['I like to eat ham','jam got on my book','can we have ham please'],
          an: ['mom has a tan van','the pan is hot','the man ran up the street'],
          ap: ['the boy wears a red cap','it is nap time','my dog is in my lap'],
          at: ['the cat ate a rat','my hat is on the mat','that is my bat'],
          ed: ['go to bed','he has a red ball','I fed the dog'],
          em: ['how low is your hem','what a pretty gem','we saw them'],
          en: ['my pen is blue','the hen sat on the egg','I am ten'],
          ep: ['he has a lot of pep','he sat on the step','go to the next step'],
          et: ['can I get that','set the net there','I am not wet yet'],
          id: ['The kid hid under there','I did not do it','I am a big kid'],
          im: ['I thank him','it is dim in here','the ball hit the rim'],
          in: ['the bin is brown','did you win','what is in the tin'],
          ip: ['the tip is going to rip','zip it up','my lip is red'],
          it: ['I bit into the pit','quit it please','sit here and do not hit'],
          od: ['I will nod yes','do you eat cod','that is a long rod'],
          om: ['I love my mom','mom and I have brown hair','where did mom go'],
          on: ['who won','he is my son','I have a ton to do'],
          op: ['I hop to the top','get the mop for me','I hear a pop'],
          ot: ['I got a lot of toys','this is not your spot','that pot is very hot'],
          ud: ['don’t go in the mud','I see a bud in the tree','I like to play in mud'],
          um: ['you may not have gum','I hum with the song','the gum is green'],
          un: ['it is fun to play','the sun is out','do you want to run there'],
          up: ['my pup is brown','what is in the cup','the pup is by the cup'],
          ut: ['shut the book and put it down','I cut that out','I want to but my mom said no']
        }
      },
      5: {
        rimes: {
          ade: ['I made a plan','the sun makes it fade','we wade in the pool'],
          ame: ['they came to the shop','do not blame me','I like to play this game'],
          ane: ['the man walks with a cane','stay in your lane','this is a weather vane'],
          ape: ['I ate a grape','batman wears a cape','tape up the box'],
          ate: ['I ate a date','what state do you live in','I hate to be late'],
          ide: ['do you want to hide','go down the slide','we ride to my house'],
          ime: ['do you have a dime','what time is it','that lime is very green'],
          ine: ['I am fine','that toy is mine','I have nine books'],
          ipe: ['does it look ripe','jump over the pipe','wipe that up'],
          ite: ['I took a bite','we have a white cat','do you see the kite'],
          ode: ['we rode to the house','what is the code','I rode down the street'],
          ome: ['can we go home','they play under the dome','my home is big'],
          one: ['that stone is very big','I don’t like your tone','look out for the cone'],
          ope: ['I hope we can go','take the rope','don’t mope around'],
          ote: ['I wrote a note to him','we will vote on this','she gave me a note'],
          ude: ['it is rude to yell','that dude is tall','don’t be rude to her'],
          une: ['can you sing a tune','my dad eats a prune','I hear the tune'],
          ute: ['that dog is so cute','she plays the flute','mute the tv']
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
          ack: ['back to school','the dog is black','place that there'],
          aid: ['she laid the doll down','he paid for the book','I have a long braid'],
          ail: ['the mail is here','the dog’s tail wags','I will not fail'],
          ain: ['the man is in pain','do you hear the rain','the train is long'],
          air: ['sit in your chair','my hair is black','I fell off the stair'],
          all: ['catch the small ball','the mall is down the street','you are very tall'],
          amp: ['I want to go to camp','my lamp is on','just go up the ramp'],
          and: ['the sand is brown','stand there please','my hand is little'],
          ang: ['please hang up your coat','the phone rang','he sang a song'],
          ank: ['he drank a big cup of tea','thank you for the book','my dad works at a bank'],
          ant: ['I can’t do it','do you want to help','the ant goes up the hill'],
          ar: ['is the car far away','I see a star in the sky','take this jar'],
          ay: ['you may play with her','stay out of my way','what day is it'],
          ead: ['read a book','lead the way','can we read this'],
          eak: ['speak up please','the boy is weak','the bird’s beak is black'],
          eam: ['my team won','what was your dream about','I love ice cream'],
          ear: ['do you hear that','is the truck near','next year we will go'],
          eat: ['this meat is good','I will not cheat','take a seat here'],
          eck: ['we sit on the deck','look at my neck','mom gave dad a peck'],
          eed: ['I feed the cat','the weed is green','I need that toy'],
          eel: ['I feel sad','the truck has a black wheel','kneel down please'],
          een: ['my house is green','have you seen dad','we have been here'],
          eep: ['the jeep went beep','go to sleep','keep it down'],
          eet: ['go down the street','his feet are big','I will meet her'],
          ell: ['I hear the bell','he fell on the street','please don’t yell'],
          end: ['send it there','I bend down','lend me your pen'],
          ent: ['we went to school','she sent me a book','that thing is bent'],
          ick: ['I think I am sick','kick the ball','that is a thick stick'],
          ill: ['I will still play','don’t spill that','we go up the big hill'],
          ing: ['bring the ring here','what is that thing','it can sting you'],
          ink: ['what is the pink drink','I think the sink is there','did you wink at me'],
          int: ['can I have a hint','this mint is good','mom will print that'],
          oad: ['this road is long','look at the toad','that is a big load'],
          oan: ['can you loan me a book','I moan about it','do not groan please'],
          oat: ['put on your coat','the boat can float','we saw a goat'],
          ock: ['put on your sock','don’t block the clock','mom will lock up'],
          oil: ['play in the soil','boil that food','don’t spoil it'],
          ong: ['this song is very long','do you hear the song','that is a long fish'],
          ood: ['this is a good book','put up your hood','he stood by me'],
          ook: ['she took my book','can we cook now','I look at the hook'],
          ool: ['I jump into the pool','this is a cool toy','the stool is out'],
          oom: ['I zoom around the room','the broom is over there','did you hear that boom'],
          oon: ['I wish I could go to the moon','we will eat at noon','soon I have to go'],
          oop: ['look at this goop','the ball went through the hoop','the loop goes around me'],
          oot: ['where is my other boot','scoot over please','the tree has a big root'],
          out: ['do not shout out','I pout when I am sad','take out the book'],
          oy: ['the boy has a toy','it is a joy to be here','the boy plays with a ball'],
          uck: ['it is bad luck to get stuck','can you tuck me in','the duck is in the truck'],
          ump: ['I have a bump on my leg','I jump around','dump your books here'],
          ung: ['I hung up my coat','the bee stung me','I have sung a song'],
          unk: ['that trunk has junk in it','look out for the skunk','I dunk the ball'],
          unt: ['the pig let out a grunt','my dad will hunt for it','this dog is the little runt'],
          y: ['sit by my mother','I see a fly in the sky','why don’t you try']
        }
      },
      7: {
        onsets: {
          spr: '',
          str: ''
        },
        rimes: {
          ab: ['grab the cab','the crab is red','just a dab'],
          ace: ['wash my face','the race is here','place that there'],
          ag: ['my bag is at school','we play tag','the flag is red'],
          age: ['we read that page','he fell off the stage','what page are we on'],
          ake: ['mom will bake a cake','the lake is blue','do not take my rake'],
          ale: ['my dad is a male','that whale is so big','mom told me a tale'],
          ard: ['go play in the yard','this chair is hard','she gave me a card'],
          are: ['share your toys','do not stare','mom takes care of me'],
          ark: ['I hear my dog bark','it is dark in here','we play in the park'],
          arm: ['the farm has pigs','it is warm out here','do you live on a farm'],
          art: ['I sit in the cart','this part is fun','start again please'],
          ase: ['I ran to the base','don’t chase me','where is my case'],
          ave: ['I gave a wave to Mom','what is in the cave','save the boy'],
          aze: ['this is a hard maze','I am in a daze','the fire will blaze'],
          eg: ['don’t beg me','my leg is here','I beg mom for a toy'],
          elt: ['dad has a brown belt','I felt happy','when will the snow melt'],
          ib: ['I don’t sleep in a crib','where is my rib','the bib is green'],
          ibe: ['this is my tribe','I saw a scribe', 'the toy was a bribe'],
          ice: ['did you see the mice','I eat rice','be nice to him'],
          ig: ['dig here for the tree','that cat is very big','the pig is funny'],
          ike: ['I got a red bike','take a hike','I like you'],
          ile: ['his house is one mile away','I smile at her','there is a pile of books'],
          ilk: ['I like milk','that is made of silk','I will ask for milk'],
          ire: ['the wire is black','my ball went under the truck’s tire','that is a big fire'],
          ive: ['I am five','we drive up the street','can you dive'],
          ix: ['dad will fix it','mix this up','he is six now'],
          ob: ['the job began','I am a slob','do not be a snob'],
          obe: ['mom has a blue robe','the globe is big','don’t probe him'],
          og: ['I can’t see in the fog','jog down here','the frog jumps over the log'],
          oke: ['it was a funny joke','he woke me up','mom spoke to the boy'],
          old: ['are you cold','can I hold her','she told me not to go'],
          ole: ['look out for the hole','he stole that toy','I want the whole thing'],
          ore: ['I have one more chore to do','mom went to the store for more things','I wore a blue hat'],
          orn: ['a new dog was born','do you like to eat corn','the horn went beep'],
          ose: ['I see a red rose','close those books','my nose is little'],
          ox: ['that is a big box','the fox is red','the fox plays in the box'],
          ub: ['get in the tub','I rub my leg','the cub goes by its mother'],
          ube: ['I put the red cube here','that is a big tube','I sit on the cube'],
          ug: ['I dug in the mud to find a bug','I want a hug to feel snug','I won’t tug on the rug'],
          ule: ['the mule is brown','did you hear the rule','I don’t like this rule'],
          urn: ['it is my turn','don’t burn the house down','turn around please']
        }
      },
      8: {
        onsets: {

        },
        rimes: {
          ash: ['we need cash to pay','take the trash out','smash the bug'],
          aw: ['the dog’s paw is small','I saw the snow thaw','draw a red truck'],
          est: ['do your best','can I rest','we have a test'],
          ew: ['I knew it','he got a new fish','we drew a few trees'],
          ight: ['do not fight','there is no light in the night','what a sight'],
          ish: ['do you eat fish','I wish I could keep it','I will bring a dish'],
          ost: ['how much does it cost','I lost my dog','I love you the most'],
          ould: ['should we go to school','I could help you','I would like to stay'],
          ound: ['the ball is round','I found my toy','we are bound for school'],
          ow: ['I will tow the car','I know to go slow here','look at the snow now'],
          ush: ['brush your hair','don’t push him','we rush over and hush'],
          ust: ['I don’t like the crust','just trust me','we must dust the house']
        }
      }
    }
  }
};
