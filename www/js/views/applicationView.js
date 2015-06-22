App.Views.Application = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this);

    this.listen();

    $(App.Config.el).empty();

    if(localStorage.loggedInTeacher){
      App.loggedInTeacher = JSON.parse(localStorage.loggedInTeacher);
      App.Dispatcher.trigger("loginSuccess");
   }else{
      this.loginView = new App.Views.Login();
      $(App.Config.el).append(this.loginView.render().el);
    }
  },

  sendAuthentication: function(xhr) {
    var email = App.loggedInTeacher.email;
    var token = App.loggedInTeacher.token;
    var header= 'Token token="'+ token +'", email="'+ email +'"';
    xhr.setRequestHeader('Authorization', header);
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
    this.listenTo(App.Dispatcher, "initializeConferenceManagementRequested", this.initializeConferenceManagement);
    document.addEventListener("resume", this.handleResumeEvent, false);
    document.addEventListener("offline", this.handleOfflineEvent, false);
    document.addEventListener("online", this.handleOnlineEvent, false);
  },

  // handleLoggedIn: function() {
  //   App.initializeStudentTestData();
  //   App.initializeStimuliTestData();
  //   this.initializeDeviceSelect();
  // },

  handleLoggedIn: function() {

    $.ajaxSetup({beforeSend:this.sendAuthentication});
    this.displayLoadingScreen();

    App.syncData.initialize(this.removeLogin, this.syncDataError);
  },

  syncDataError: function(){
    console.log("syncDataError");
  },

  displayLoadingScreen: function(){
    this.loadingScreen = new App.Views.Loading({el: App.Config.el});
  },

  removeLogin: function() {
    console.log("removeLogin");
    this.loadingScreen.removeView();
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
    $("table").stickyTableHeaders({ "fixedOffset": 2});
  },

  handleResumeEvent: function(){
    this.displayLoadingScreen();
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
