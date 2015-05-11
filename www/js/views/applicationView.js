App.Views.Application = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this);
    this.loginView = new App.Views.Login();
    $(App.Config.el).append(this.loginView.render().el);

    this.listen(); 
  },

  sendAuthentication: function (xhr) {
    var email = App.currentUser.email;
    var token = App.currentUser.token;
    var header= 'Token token="'+token+'", email="'+email+'"';
    xhr.setRequestHeader('Authorization', header);
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  },

  handleLoggedIn: function() {
    // this.initializeStudentCollection();

    App.initializeStageStoryTestData();
    App.initializeLeveledTextsTestData();

    App.initializeStudentTestData();
    App.initializeStimuliTestData();
    this.initializeDeviceSelect();
  },

  // initializeStudentCollection: function(){
  //   $.ajaxSetup({beforeSend:this.sendAuthentication});
  //   localStorage.clear();
  //   console.log("App.Views.Application.initializeStudentCollection: localStorage being cleared");
  //   App.roster = new App.Collections.Students();
  //   App.roster.fetch({
  //     success: this.initializeStimuliCollections,
  //     error: this.initializeStudentCollectionFail
  //    });
  // },

  // initializeStudentCollectionFail: function(){
  //   console.log("initializeStudentCollectionFail");
  // },

  // initializeStimuliCollections: function(){
  //   App.stimuli = new App.Collections.Stimuli();
  //   App.stimuli.fetch({
  //     success: this.initializeDeviceSelect,
  //     error: this.initializeStimuliCollectionFail
  //    });
  // },

  // initializeStimuliCollectionFail: function(){
  //   console.log("initializeStudentCollectionFail");
  // },

  initializeDeviceSelect: function() {
    this.deviceSelect = new App.Views.DeviceSelect();
    $(App.Config.el).append(this.deviceSelect.render().el);
    this.loginView.remove();
  }

});
