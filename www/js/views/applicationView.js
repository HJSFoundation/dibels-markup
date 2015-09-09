App.Views.Application = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this);
    this.listen();
    $(App.Config.el).empty();
    App.database.init();

    if (localStorage.currentTeacher && JSON.parse(localStorage.currentTeacher).loggedIn) {
      App.currentTeacher = JSON.parse(localStorage.currentTeacher);
      App.Dispatcher.trigger("loginSuccess");
    } else {
      this.loginView = new App.Views.Login();
      $(App.Config.el).append(this.loginView.render().el);
      if (!is_browser) {
        navigator.splashscreen.hide();
      }
    }
  },

  sendAuthentication: function(xhr) {
    var email = App.currentTeacher.email;
    var token = App.currentTeacher.token;
    var header = 'Token token="' + token + '", email="' + email + '"';
    xhr.setRequestHeader('Authorization', header);
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
    this.listenTo(App.Dispatcher, "logout", this.handleLogout);
    this.listenTo(App.Dispatcher, "resyncRequest", this.handleResyncRequest);
    this.listenTo(App.Dispatcher, "initializeConferenceManagementRequested", this.initializeConferenceManagement);

    document.addEventListener("resume", this.handleResumeEvent, false);
    document.addEventListener("offline", this.handleOfflineEvent, false);
    document.addEventListener("online", this.handleOnlineEvent, false);
  },

  handleLoggedIn: function() {
    $.ajaxSetup({ beforeSend:this.sendAuthentication });
    if (!localStorage.initialSyncCompleted) {
      this.displayLoadingScreen();
    }

    Backbone.DualStorage.offlineStatusCodes = function(xhr) {
      var codes = [];

      if (xhr.status > 399) {
        codes.push(xhr.status);
      }
      return codes;
    };

    var classroomUrl = App.url() + '/classrooms/' + App.currentTeacher.classroom_id;

    $.ajax({
      type: 'GET',
      url: classroomUrl,
      crossDomain: true,
      success: function(responseData) {
        window.plugins.insomnia.keepAwake();
        App.syncData.initialize(App.applicationView.removeLogin, App.applicationView.syncDataError);
      },
      error: function(responseData) {
        App.applicationView.redirectToLogin("Please log in again. Status: " + responseData.status);
      }
    });
  },

  handleLogout: function(){
    App.currentTeacher.loggedIn = false;
    localStorage.currentTeacher = JSON.stringify(App.currentTeacher);
    location.reload();
  },

  redirectToLogin: function(msg) {
    this.loginView = new App.Views.Login();
    $(App.Config.el).append(this.loginView.render().el);
    alert(msg);
  },

  syncDataError: function(collection, response, options, description) {

    if (!is_browser) {
      navigator.splashscreen.hide();
      window.plugins.insomnia.allowSleepAgain();
    }
    console.log("syncDataError:" + description);
    $(App.Config.el).empty();
    localStorage.clear();
    App.database.dropTables();
    this.redirectToLogin(description);
  },

  displayLoadingScreen: function() {
    this.loadingScreen = new App.Views.Loading({ el: App.Config.el });
  },

  removeLogin: function() {
    console.log("removeLogin");
    if (!is_browser) {
      navigator.splashscreen.hide();
      window.plugins.insomnia.allowSleepAgain();
    }
    if (this.loginView) {
      this.loginView.remove();
    }
    this.stopListening(App.Dispatcher, "loginSuccess");
    this.initializeConferenceManagement();
  },

  initializeConferenceManagement: function() {
    $(App.Config.el).empty();
    if (this.conferenceManagement) {
      this.conferenceManagement.remove();
    }
    this.conferenceManagement = new App.Views.ConferenceManagement();
    $(App.Config.el).append(this.conferenceManagement.render().el);
  },

  handleResumeEvent: function() {
    this.resync();
  },

  handleResyncRequest: function() {
    this.resync();
  },

  resync: function() {
    if (!is_browser) {
      navigator.splashscreen.show();
    }
    location.reload();
  },

  handleOfflineEvent: function() {
    console.log("handleOfflineEvent");
    App.online = false;
  },

  handleOnlineEvent: function() {
    console.log("handleOnlineEvent");
    App.online = true;
  }
});
