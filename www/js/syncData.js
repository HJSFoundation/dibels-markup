App.syncData = {

  success: null,
  error: null,

  initialize: function(success, error){
    _.bindAll(this);

    this.success = success;
    this.error = error;
    this.fetchLocalData();
  },

  fetchLocalData: function(){

    App.Config.storageLocalState = true;

    App.userReadingStages = new App.Collections.UserReadingStages();
    App.userReadingStages.fetch({remove: false, add: true});

    App.roster = new App.Collections.Students();
    App.roster.fetch({remove: false, add: true});

    App.conferences = new App.Collections.Conferences();
    App.conferences.fetch({remove: false, add: true});

    App.conferenceSessions = new App.Collections.ConferenceSessions();
    App.conferenceSessions.fetch({remove: false, add: true});

    App.notesLastTakenAt = localStorage.getItem("App.notesLastTakenAt");
    App.notes = new App.Collections.Notes();
    App.notes.fetch({remove: false, add: true});

    App.clientLastFetchedAt = localStorage.getItem("App.clientLastFetchedAt");
    App.stimuli = new App.Collections.Stimuli();
    App.stimuli.fetch({remove: false, add: true});

    App.Config.storageLocalState = false;
    console.log("local fetch complete");
    this.initializeUserReadingStagesCollection();

  },

  initializeUserReadingStagesCollection: function(result) {
    console.log("initializeUserReadingStagesCollection");

    if(App.isOnline()){
      App.userReadingStages.syncDirtyAndDestroyed({success: this.removeCleanUserReadingStageModelsFromCollection});
    }

    this.initializeStudentCollection();
  },

  removeCleanUserReadingStageModelsFromCollection: function(model, response, options){
    if(!options.dirty){
      App.userReadingStages.reset();
    }
  },

  initializeUserReadingStagesCollectionFail: function() {
    console.log("initializeUserReadingStagesCollectionFail");
    this.error();
  },

  initializeStudentCollection: function() {
    console.log("initializing StudentsCollection");

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

  initializeNotesCollection: function(result) {
    console.log("initializing NotesCollection");


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

    if(App.isOnline()){

      App.conferences.syncDirtyAndDestroyed();

      App.conferences.fetch({
        success: this.initializeConferenceSessionsCollection,
        error: this.initializeConferencesCollectionFail,
        remove: false,
        add: true
      });
    }else{
      this.initializeConferenceSessionsCollection();
    }
  },

  initializeConferencesCollectionFail: function() {
    console.log("initializeConferencesCollectionFail");
    this.error();

  },

  initializeConferenceSessionsCollection: function(result) {
    console.log("initializeConferenceSessionsCollection");

    if(App.isOnline()){
      App.conferenceSessions.syncDirtyAndDestroyed({success: this.removeCleanModels});
    }

    this.initializeStimuliCollections();
  },

  removeCleanModels: function(model, response, options){
    if(!options.dirty){
      App.conferenceSessions.reset();
    }
  },

  initializeConferenceSessionsCollectionFail: function() {
    console.log("initializeConferenceSessionsCollectionFail");
    this.error();
  },

  initializeStimuliCollections: function(result) {
    console.log("initializeStimuliCollections");


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
    App.clientLastFetchedAt = moment.utc().toISOString();
    localStorage.setItem("App.clientLastFetchedAt", App.clientLastFetchedAt);
    this.initializeLocalStorage();
  },

  initializeStimuliCollectionFail: function() {
    console.log("initializeStudentCollectionFail");
    this.error();

  },

  initializeLocalStorage: function(){

    console.log("initializeLocalStorage");

    if(!localStorage["App.notes"]){
      App.Config.storageLocalState=true;
      _.each(App.notes.models, function(model){
        model.save();
      });
      App.Config.storageLocalState=false;
    }else{
      if(App.resp.notes.length>0){
        App.Config.storageLocalState=true;
        _.each(App.resp.notes, function(note){
          App.notes.get(note.id).save();
        });
        App.Config.storageLocalState=false;
      }
    }

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
    }else{
      if(App.resp.stimuli.length>0){
        App.Config.storageLocalState=true;
        _.each(App.resp.stimuli, function(stimulus){
          App.stimuli.get(stimulus.id).save();
        });
        App.Config.storageLocalState=false;
      }

    }

    this.success();
  },
};
