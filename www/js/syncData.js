App.syncData = {

  success: null,
  error: null,

  initialize: function(success, error){
    _.bindAll(this);

    this.success = success;
    this.error = error;
    this.initializeStudentCollection();
  },

  initializeStudentCollection: function() {
    console.log("initializing StudentsCollection");

    App.roster = new App.Collections.Students();
    App.Config.storageLocalState = true;
    App.roster.fetch({remove: false, add: true});
    App.Config.storageLocalState = false;

    if(App.isOnline()){

      App.roster.fetch({
        success: this.initializeNotesCollection,
        error: this.initializeStudentCollectionFail,
        remove: false,
        add: true
      });
    }else{
      this.initializeNotesCollection();
    }
  },

  initializeStudentCollectionFail: function() {
    console.log("initializeStudentCollectionFail");
    this.error();
  },

  // initializeStudentTestReadingStages: function() {
  //   var readingStage = 1;
  //   _.each(App.roster.models, function(student){
  //     student.set({"reading_stage": readingStage});
  //     readingStage = readingStage + 1;
  //     if (readingStage > App.Config.maxStageCount) {
  //       readingStage = 1;
  //     }
  //   },this);
  // },

  initializeNotesCollection: function(result) {
    console.log("initializing NotesCollection");

    App.notes = new App.Collections.Notes();

    App.Config.storageLocalState = true;
    App.notes.fetch({remove: false, add: true});
    App.Config.storageLocalState = false;

    if(App.isOnline()){

      App.notes.syncDirtyAndDestroyed();

      App.notes.fetch({
        success: this.initializeConferencesCollection,
        error: this.initializeNotesCollectionFail,
        remove: false,
        add: true
      });
    }else{
      this.initializeConferencesCollection();
    }
  },

  initializeNotesCollectionFail: function() {
    console.log("initializeNotesCollectionFail");
    this.error();
  },

  initializeConferencesCollection: function(result) {

    console.log("initializeConferencesCollection");
    // $.ajaxSetup({beforeSend:this.sendAuthentication});
    App.conferences = new App.Collections.Conferences();

    App.Config.storageLocalState = true;
    App.conferences.fetch({remove: false, add: true});
    App.Config.storageLocalState = false;

    if(App.isOnline()){

      App.conferences.syncDirtyAndDestroyed();

      App.conferences.fetch({
        success: this.initializeStimuliCollections,
        error: this.initializeConferencesCollectionFail,
        remove: false,
        add: true
      });
    }else{
      this.initializeStimuliCollections();
    }
  },

  initializeConferencesCollectionFail: function() {
    console.log("initializeConferencesCollectionFail");
    this.error();

  },

  initializeStimuliCollections: function(result) {
    console.log("initializeStimuliCollections");

    App.clientLastFetchedAt = localStorage.getItem("App.clientLastFetchedAt");

    App.stimuli = new App.Collections.Stimuli();
    App.Config.storageLocalState = true;
    App.stimuli.fetch({remove: false, add: true});
    App.Config.storageLocalState=false;

    console.log("local fetch complete");

    if(App.isOnline()){
      App.stimuli.syncDirtyAndDestroyed();
      console.log("syncDirtyAndDestroyed complete");

      App.stimuli.fetch({
        success: this.initializeStimuliCollectionSuccess,
        error: this.initializeStimuliCollectionFail,
        remove: false,
        add: true
       });
    }else{
      this.initializeStimuliCollectionSuccess();
    }

  },

  initializeStimuliCollectionSuccess: function(result) {
    var d = new Date();
    App.clientLastFetchedAt = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    localStorage.setItem("App.clientLastFetchedAt", App.clientLastFetchedAt);
    this.initializeLocalStorage();
  },

  initializeStimuliCollectionFail: function() {
    console.log("initializeStudentCollectionFail");
    // App.stimuli.local = App.Config.storageLocalState;
    this.error();

  },

  initializeLocalStorage: function(){

    console.log("initializeLocalStorage");


    App.Config.storageLocalState=true;
    _.each(App.notes.models, function(model){
      model.save();
    });
    App.Config.storageLocalState=false;

    App.Config.storageLocalState=true;
    _.each(App.roster.models, function(model){
      model.save();
    });
    App.Config.storageLocalState=false;

    App.Config.storageLocalState=true;
    _.each(App.conferences.models, function(model){
      model.save();
    });
    App.Config.storageLocalState=false;

    if(!localStorage["App.stimuli"]){
      App.Config.storageLocalState=true;
      _.each(App.stimuli.models, function(model){
        model.save();
      });
      App.Config.storageLocalState=false;
    }

    this.success();
  },
};
