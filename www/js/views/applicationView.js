App.Views.Application = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this);

    this.listen();

    $(App.Config.el).empty();
    App.database.init();


    if(localStorage.currentTeacher && JSON.parse(localStorage.currentTeacher).loggedIn){
      App.currentTeacher = JSON.parse(localStorage.currentTeacher);
      App.Dispatcher.trigger("loginSuccess");
   }else{
      this.loginView = new App.Views.Login();
      $(App.Config.el).append(this.loginView.render().el);

      if(!is_browser){
        navigator.splashscreen.hide();
      }
    }
  },

  sendAuthentication: function(xhr) {
    var email = App.currentTeacher.email;
    var token = App.currentTeacher.token;
    var header= 'Token token="'+ token +'", email="'+ email +'"';
    xhr.setRequestHeader('Authorization', header);
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
    this.listenTo(App.Dispatcher, "logout", this.handleLogout);
    this.listenTo(App.Dispatcher, "initializeConferenceManagementRequested", this.initializeConferenceManagement);

    document.addEventListener("resume", this.handleResumeEvent, false);
    document.addEventListener("offline", this.handleOfflineEvent, false);
    document.addEventListener("online", this.handleOnlineEvent, false);
  },

  handleLoggedIn: function() {

    $.ajaxSetup({beforeSend:this.sendAuthentication});
    if(!localStorage.initialSyncCompleted){
      this.displayLoadingScreen();
    }

    Backbone.DualStorage.offlineStatusCodes = function(xhr) {
      var codes = [];

      if (xhr.status>399) {
        codes.push(xhr.status);
      }

      return codes;
    }


    App.syncData.initialize(this.removeLogin, this.syncDataError);
  },

  handleLogout: function(){

    App.currentTeacher.loggedIn = false;
    localStorage.currentTeacher = JSON.stringify(App.currentTeacher);
    location.reload();
  },

  syncDataError: function(collection, response, options, description){
    if(!is_browser){
      navigator.splashscreen.hide();
    }

    console.log("syncDataError");
    $(App.Config.el).empty();
    localStorage.clear();
    App.database.dropTables();
    this.loginView = new App.Views.Login();
    $(App.Config.el).append(this.loginView.render().el);
    alert("Network error. Please check your connection.");

  },

  displayLoadingScreen: function(){
    this.loadingScreen = new App.Views.Loading({el: App.Config.el});
  },

  removeLogin: function() {

    console.log("removeLogin");
    if(!is_browser){
      navigator.splashscreen.hide();
    }
    if(this.loginView){
      this.loginView.remove();
    }
    this.stopListening(App.Dispatcher, "loginSuccess");
    this.initializeConferenceManagement();
  },

  initializeConferenceManagement: function() {
    $(App.Config.el).empty();
    if(this.conferenceManagement){
      this.conferenceManagement.remove();
    }
    this.conferenceManagement = new App.Views.ConferenceManagement();
    $(App.Config.el).append(this.conferenceManagement.render().el);

  },

  handleResumeEvent: function(){
    if(!is_browser){
      navigator.splashscreen.show();
    }

    location.reload();
  },

  handleOfflineEvent: function(){
    console.log("handleOfflineEvent");
    App.online = false;
  },

  handleOnlineEvent: function(){
    console.log("handleOnlineEvent");
    App.online = true;
  }


});
