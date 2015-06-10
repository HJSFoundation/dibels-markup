App.Views.Application = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this);
    // StatusBar.hide();
    this.loginView = new App.Views.Login();
    $(App.Config.el).append(this.loginView.render().el);
    this.listen();
  },

  sendAuthentication: function(xhr) {
    var email = App.loggedInTeacher.email;
    var token = App.loggedInTeacher.token;
    var header= 'Token token="'+ token +'", email="'+ email +'"';
    xhr.setRequestHeader('Authorization', header);
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  },

  // handleLoggedIn: function() {
  //   App.initializeStudentTestData();
  //   App.initializeStimuliTestData();
  //   this.initializeDeviceSelect();
  // },

  handleLoggedIn: function() {
    this.initializeStudentCollection();
  },

  initializeStudentCollection: function() {
    $.ajaxSetup({beforeSend:this.sendAuthentication});

    localStorage.clear();
    console.log("App.Views.Application.initializeStudentCollection: localStorage being cleared");

    App.roster = new App.Collections.Students();
    App.roster.fetch({
      success: this.initializeNotesCollection,
      error: this.initializeStudentCollectionFail
     });
  },

  initializeStudentCollectionFail: function() {
    console.log("initializeStudentCollectionFail");
  },

  initializeStudentTestReadingStages: function() {
    var readingStage = 1;
    _.each(App.roster.models, function(student){
      student.set({"reading_stage": readingStage});
      readingStage = readingStage + 1;
      if (readingStage > App.Config.maxStageCount) {
        readingStage = 1;
      }
    },this);
  },

  initializeNotesCollection: function() {
    console.log("initializing NotesCollection");

    // this.initializeStudentTestReadingStages();
    $.ajaxSetup({beforeSend:this.sendAuthentication});

    App.notes = new App.Collections.Notes();
    App.notes.fetch({
      success: this.initializeConferencesCollection,
      error: this.initializeNotesCollectionFail
     });
  },

  initializeNotesCollectionFail: function() {
    console.log("initializeNotesCollectionFail");
  },

  initializeConferencesCollection: function() {
    console.log("initializeConferencesCollection");
    $.ajaxSetup({beforeSend:this.sendAuthentication});
    App.conferences = new App.Collections.Conferences();
    App.conferences.fetch({
      success: this.initializeStimuliCollections,
      error: this.initializeConferencesCollectionFail
     });
  },

  initializeConferencesCollectionFail: function() {
    console.log("initializeConferencesCollectionFail");
  },

  initializeStimuliCollections: function() {
    console.log("initializeStimuliCollections");
    App.stimuli = new App.Collections.Stimuli();
    App.stimuli.fetch({
      success: this.initializeConferenceManagement,
      error: this.initializeStimuliCollectionFail
     });
  },

  initializeStimuliCollectionFail: function() {
    console.log("initializeStudentCollectionFail");
  },

  initializeConferenceManagement: function() {
    console.log("initializeConferenceManagement");
    this.loginView.remove();
    this.stopListening(App.Dispatcher, "loginSuccess");
    $(App.Config.el).empty();
    if (this.conferenceManagement) {
      this.conferenceManagement.remove();
    }
    this.conferenceManagement = new App.Views.ConferenceManagement();
    $(App.Config.el).append(this.conferenceManagement.render().el);
    $("table").stickyTableHeaders({ "fixedOffset": 2});
  }
});
