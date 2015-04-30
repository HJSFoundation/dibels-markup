App.Views.Application = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this);
    this.loginView = new App.Views.Login();
    $(App.Config.el).append(this.loginView.render().el);

    this.listen(); 
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  },

  handleLoggedIn: function() {
    this.initializeStudentCollection();
  },

  initializeStudentCollection: function(){
    App.roster = new App.Collections.Students();
    App.roster.fetch({
      beforeSend: App.sendAuthentication,
      success: this.initializeStimuliCollections,
      error: this.initializeStudentCollectionFail
     });
  },

  initializeStudentCollectionFail: function(){
    console.log("initializeStudentCollectionFail");
  },

  initializeStimuliCollections: function(){
    App.stimuli = new App.Collections.Stimuli();
    App.stimuli.fetch({
      beforeSend: App.sendAuthentication,
      success: this.initializeDeviceSelect,
      error: this.initializeStimuliCollectionFail
     });
  },

  initializeStimuliCollectionFail: function(){
    console.log("initializeStudentCollectionFail");
  },

  initializeDeviceSelect: function() {
    this.deviceSelect = new App.Views.DeviceSelect();
    $(App.Config.el).append(this.deviceSelect.render().el);
    this.loginView.remove();
  }

});
