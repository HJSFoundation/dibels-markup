App.syncData = {
  success: null,
  error: null,

  initialize: function(success, error) {
    _.bindAll(this);
    this.success = success;
    this.error = error;
    App.clearRemoteSyncError();
    App.Config.storageLocalState = false;
    this.populateRosterFromDatabase();
  },

  addAllToDatabase: function(collectionName) {
    _.each(App[collectionName].models, function(model) {
      App.database.create(collectionName, model);
    });
  },

  createOrUpdateAllToDatabase: function(collectionName) {
    _.each(App[collectionName].models, function(model) {
      App.database.createOrUpdate(collectionName, model);
    });
  },

  addAllToCollection: function(tableName, success) {
    App.database.readAll(tableName, success);
  },

  populateRosterFromDatabase: function() {
    App.roster = new App.Collections.Students();
    App.database.createTable("roster");
    this.addAllToCollection("roster", this.populateStimuliFromDatabase);
  },

  populateStimuliFromDatabase: function() {
    App.stimuli = new App.Collections.Stimuli();
    App.database.createTable("stimuli");
    this.addAllToCollection("stimuli", this.fetchLocalData);
  },

  fetchLocalData: function() {
    App.Config.storageLocalState = true;

    App.networkErrors = new App.Collections.NetworkErrors();
    App.networkErrors.fetch({ remove: false, add: true });

    App.userReadingStages = new App.Collections.UserReadingStages();
    App.userReadingStages.fetch({ remove: false, add: true });

    App.conferences = new App.Collections.Conferences();
    App.conferences.fetch({ remove: false, add: true });

    App.conferenceSessions = new App.Collections.ConferenceSessions();
    App.conferenceSessions.fetch({ remove: false, add: true });

    App.notesLastTakenAt = localStorage.getItem("App.notesLastTakenAt");
    App.notes = new App.Collections.Notes();
    App.notes.fetch({ remove: false, add: true });

    App.clientLastFetchedAt = localStorage.getItem("App.clientLastFetchedAt");
    App.Config.storageLocalState = false;
    this.initializeNetworkErrorsCollection();
  },

  initializeNetworkErrorsCollection: function(result) {
    console.log("initializeNetworkErrorsCollection");
    if (App.isOnline()) {
      App.networkErrors.syncDirtyAndDestroyed({ success: this.removeCleanNetworkErrorModelsFromCollection });
    }
    this.initializeUserReadingStagesCollection();
  },

  removeCleanNetworkErrorModelsFromCollection: function(model, response, options) {
    if (!options.dirty) { App.networkErrors.reset(); }
  },

  initializeUserReadingStagesCollection: function(result) {
    console.log("initializeUserReadingStagesCollection");
    if (App.isOnline()) { App.userReadingStages.syncDirtyAndDestroyed({ success: this.removeCleanUserReadingStageModelsFromCollection }); }
    this.initializeStudentCollection();
  },

  removeCleanUserReadingStageModelsFromCollection: function(model, response, options) {
    if (!options.dirty) { App.userReadingStages.reset(); }
  },

  initializeStudentCollection: function() {
    console.log("initializing StudentsCollection");
    if (App.isOnline()) {
      App.roster.fetch({
        success: this.initializeNotesCollection,
        error: this.initializeStudentCollectionFail,
        add: true
      });
    } else {
      this.initializeNotesCollection();
    }
  },

  initializeStudentCollectionFail: function(collection, response, options) {
    console.log("initializeStudentCollectionFail");
    App.logRemoteSyncError(collection, response, options, "initializeStudentCollectionFail");
    if (localStorage.initialSyncCompleted) {
      this.initializeNotesCollection();
    } else {
      this.returnToLoginWithError(collection, response, options, "initializeStudentCollectionFail");
    }
  },

  initializeNotesCollection: function(result) {
    console.log("initializing NotesCollection");
    if (App.isOnline()) {
      App.notes.syncDirtyAndDestroyed();
      App.notes.fetch({
        success: this.initializeConferencesCollection,
        error: this.initializeNotesCollectionFail,
        remove: false,
        add: true
      });
    } else {
      this.initializeConferencesCollection();
    }
  },

  initializeNotesCollectionFail: function(collection, response, options) {
    console.log("initializeNotesCollectionFail");
    App.logRemoteSyncError(collection, response, options, "initializeNotesCollectionFail");
    if (localStorage.initialSyncCompleted) {
      this.initializeConferencesCollection();
    } else {
      this.returnToLoginWithError(collection, response, options, "initializeNotesCollectionFail");
    }
  },

  initializeConferencesCollection: function(result) {
    console.log("initializeConferencesCollection");
    if (App.isOnline()) {
      App.conferences.syncDirtyAndDestroyed();
      App.conferences.fetch({
        success: this.initializeConferenceSessionsCollection,
        error: this.initializeConferencesCollectionFail,
        add: true
      });
    } else {
      this.initializeConferenceSessionsCollection();
    }
  },

  initializeConferencesCollectionFail: function(collection, response, options) {
    console.log("initializeConferencesCollectionFail");
    App.logRemoteSyncError(collection, response, options, "initializeConferencesCollectionFail");
    if (localStorage.initialSyncCompleted) {
      this.initializeConferenceSessionsCollection();
    } else {
      this.returnToLoginWithError(collection, response, options, "initializeConferencesCollectionFail");
    }
  },

  initializeConferenceSessionsCollection: function(result) {
    console.log("initializeConferenceSessionsCollection");
    if (App.isOnline()) { App.conferenceSessions.syncDirtyAndDestroyed({success: this.removeCleanModels}); }
    this.initializeStimuliCollections();
  },

  removeCleanModels: function(model, response, options) {
    if (!options.dirty) { App.conferenceSessions.reset(); }
  },

  initializeStimuliCollections: function(result) {
    console.log("initializeStimuliCollections");
    if (App.isOnline()) {
      App.stimuli.syncDirtyAndDestroyed();
      console.log("syncDirtyAndDestroyed complete");
      if (App.applicationView.loadingScreen) {
        this.totalStimuliModels = App.roster.length * App.Config.stimuliModelsPerStudent;
        App.applicationView.loadingScreen.setMaxValue(this.totalStimuliModels);
        App.applicationView.loadingScreen.render();
        this.totalStimuliModels = 0;
      }
      App.stimuli.initializeFetch();
      this.fetchStimuli();
    } else {
      this.initializeStimuliCollectionSuccess();
    }
  },

  fetchStimuli: function() {
    App.stimuli.fetch({
      success: this.fetchStimuliSuccess,
      error: this.initializeStimuliCollectionFail,
      remove: false,
      add: true,
     });
  },

  addStimuliPageToDatabase: function() {
    var models = _.clone(App.resp.stimuli);
    _.each(models, function(model) {
      App.database.createOrUpdate("stimuli", model, this.decrementTotalCount);
    }, this);
  },

  decrementTotalCount: function() {
    App.stimuli.totalCount = Math.max(App.stimuli.totalCount - 1, 0);
    if (App.applicationView.loadingScreen) {
      App.syncData.totalStimuliModels += 1;
      App.applicationView.loadingScreen.updateValue(App.syncData.totalStimuliModels);
    }
  },

  fetchStimuliSuccess: function() {
    console.log("fetchStimuliSuccess currentResponseLength:" + App.stimuli.currentResponseLength);
    console.log("fetchStimuliSuccess models:" + App.stimuli.models.length);
    if (App.stimuli.isError()) {
      this.initializeStimuliCollectionPageFail();
    } else if (App.stimuli.isComplete()) {
      this.initializeStimuliCollectionSuccess();
    } else {
      this.addStimuliPageToDatabase();
      this.fetchStimuli();
    }
  },

  initializeStimuliCollectionSuccess: function(result) {
    App.clientLastFetchedAt = moment.utc().toISOString();
    localStorage.setItem("App.clientLastFetchedAt", App.clientLastFetchedAt);

    if((App.Config.stimuliModelsPerStudent * App.roster.length) > App.stimuli.length){
      App.logRemoteSyncError(App.stimuli, {status: App.Config.errorCode.stimuliTotalCountInconsistent}, {}, "stimuliTotalCountInconsistent");
    }

    this.initializeLocalStorage();
  },

  initializeStimuliCollectionFail: function(collection, response, options) {
    console.log("initializeStimuliCollectionFail");
    App.logRemoteSyncError(collection, response, options, "initializeStimuliCollectionFail");
    if (localStorage.initialSyncCompleted) {
      this.initializeLocalStorage();
    } else {
      this.returnToLoginWithError(collection, response, options, "initializeStimuliCollectionFail");
    }
  },

  initializeStimuliCollectionPageFail: function() {
    var response = { status: -1 };
    var description = "initializeStimuliCollectionPageFail";
    console.log(description);
    App.logRemoteSyncError(App.stimuli, response, {}, description);
    if (localStorage.initialSyncCompleted) {
      this.initializeLocalStorage();
    } else {
      this.returnToLoginWithError(App.stimuli, response, {}, description);
    }
  },

  initializeLocalStorage: function() {
    console.log("initializeLocalStorage");
    if (!localStorage["App.notes"]) {
      App.Config.storageLocalState = true;
      _.each(App.notes.models, function(model) {
        model.save();
      });
      App.Config.storageLocalState = false;
    } else if (App.resp.notes.length > 0) {
      App.Config.storageLocalState = true;
      _.each(App.resp.notes, function(note) {
        App.notes.get(note.id).save();
      });
      App.Config.storageLocalState = false;
    }
    this.createOrUpdateAllToDatabase("roster");
    App.Config.storageLocalState = true;
    _.each(App.conferences.models, function(model) {
      model.save();
    });
    App.Config.storageLocalState = false;
    console.log("fetchStimuliSuccess currentResponseLength:" + App.stimuli.currentResponseLength) ;
    console.log("fetchStimuliSuccess models:" + App.stimuli.models.length);
    if (localStorage.initialSyncCompleted) {
      console.log("localStorage.initialSyncCompleted");
      if (!App.getRemoteSyncErrorState()) {
        localStorage.lastSuccessfulFullSyncDate = moment.utc().toISOString();
      } else {
        var lastSuccessfulFullSyncDate = moment.utc(localStorage.lastSuccessfulFullSyncDate);
        var daysSinceLastSuccessfulFullSync = Math.floor(lastSuccessfulFullSyncDate.diff(moment.utc(), "days"));
        if (daysSinceLastSuccessfulFullSync > App.Config.maxDaysSinceSuccessfulFullSync) {
          alert("It has been " + daysSinceLastSuccessfulFullSync + " since a successful sync. \nPlease check your network connection.");
        }
      }
      this.success();
    } else if (App.getRemoteSyncErrorState()) {
      this.returnToLoginWithError({}, "Sync Error", {}, "Stimuli total count inconsistent. Please try again.");
    } else if (App.isOnline()) {
        localStorage.initialSyncCompleted = true;
        localStorage.lastSuccessfulFullSyncDate = moment.utc().toISOString();
        this.stimuliInterval = setInterval(this.checkStimuliDone, 1000);
    } else {
      this.returnToLoginWithError({}, "OFFLINE", {}, "Device is offline.");
    }
  },

  checkStimuliDone: function() {
    console.log("syncData.checkStimuliDone App.stimuli.totalCount: " + App.stimuli.totalCount);
    if (App.stimuli.totalCount === 0) {
      clearInterval(App.syncData.stimuliInterval);
      App.syncData.success();
    }
  },

  returnToLoginWithError: function(collection, response, options, description) {
    console.log("returnToLoginWithError", collection, response, options, description);
    this.error(collection, response, options, description);
  }
};
