App.Views.ConferenceManagement = Backbone.View.extend({
  template: App.templates.conferenceManagement,

  conferenceGroups: {},

  events: {
    'click .js-manageButton': 'handleDisplayManage',
    'click .js-menuToggle' : 'handleToggleMenu',
    'click .js-logout' : 'handleLogout'
  },


  initialize: function() {
    _.bindAll(this);

    App.students = new App.Collections.Students();
    App.selectedSkill = "";

    this.listen();
    this.render();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "startSessionRequested", this.handleStartSessionRequested);
    this.listenTo(App.Dispatcher, "endSessionRequested", this.handleEndSessionRequested);
    this.listenTo(App.Dispatcher, "endSessionLogoutRequested", this.handleEndSessionLogoutRequested);
  },

  render: function() {
    this.$el.html(this.template());

    this.$tbody = this.$el.find("tbody");
    var groupConferences = App.conferences.where({conference_type: "group", classroom_id: App.currentTeacher.classroom_id});

    _.each(groupConferences, function(groupConference) {
      this.students = [];
      var user_ids = groupConference.get("user_ids");
      _.each(user_ids, function(user_id){
        this.students.push(App.roster.findWhere({id: user_id}));
      }, this);

      var groupView = this.conferenceGroups[groupConference.get("id")] = new App.Views.ConferenceGroup({model: groupConference, students: this.students});
      this.$tbody.append(groupView.render().el);

      var dropDownView = new App.Views.ConferenceGroupDropdown({students: this.students, conferenceId: groupConference.get("id")});
      this.$tbody.append(dropDownView.render().el);
    }, this);

    var studentConferences = App.conferences.where({conference_type: "user", classroom_id: App.currentTeacher.classroom_id});
    _.each(studentConferences, function(studentConference) {
      var view = this.conferenceGroups[studentConference.get("id")] = new App.Views.ConferenceStudent({ model: studentConference});
      this.$tbody.append(view.render().el);
    }, this);


    return this;
  },

  setStartSessionTime: function(){
    var startAndUpdatedAtDate = App.newISODate();
    this.model = new App.Models.ConferenceSession({
      "conference_id": App.selectedConference.id,
      "user_id": App.currentTeacher.id,
      "context": "teacher_notepad",
      "started_at": startAndUpdatedAtDate,
      "ended_at":"",
      "client_updated_at": startAndUpdatedAtDate
    });
    App.conferenceSessions.add(this.model);
    this.model.save(null, {
      description:"conferenceManagementView.setStartSessionTime",
      request_type: "POST",
      request_resource: this.model.url()
    })
      .fail(App.logRemoteSaveError);
  },

  setEndSessionTime: function(){
    var startAndUpdatedAtDate = App.newISODate();
    this.model.set({ended_at: startAndUpdatedAtDate, client_updated_at: startAndUpdatedAtDate});
    document.removeEventListener("pause", this.handlePauseEvent);
  },

  handleToggleMenu: function() {
    $(".js-mainNav").toggleClass("st-show");
  },

  handleStartSessionRequested: function() {
    console.log("handleStartSessionRequested");
    this.setStartSessionTime();
    $(App.Config.el).empty();
    this.teacherWorkspace = new App.Views.TeacherWorkspace({ el: App.Config.el });
    document.addEventListener("pause", this.handlePauseEvent, false);

    return false;
  },

  handlePauseEvent: function(){
    this.setEndSessionTime();
    this.model.save(null, {
      description:"conferenceManagementView.handlePauseEvent",
      request_type: "PUT",
      request_resource: this.model.url()
    })
      .fail(App.logRemoteSaveError);

  },

  handleEndSessionRequested: function() {
    this.setEndSessionTime();
    this.model.save()
      .done(App.applicationView.handleResumeEvent)
      .fail(this.handleEndSessionRequestedFail);
  },

  handleEndSessionRequestedFail: function(response){
    response.description = "conferenceManagementView.handleEndSessionRequested";
    response.request_type = "PUT";
    response.request_resource = this.model.url();
    App.logRemoteSaveError(response);
    App.applicationView.handleResumeEvent();
  },

  handleDisplayManage: function() {
    App.browser = window.open(App.Config.tutormateUrl + "/students/"+App.currentTeacher.classroom_id, "_blank", "location=yes");

    console.log("handleDisplayManage");
    return false;
  },

  handleEndSessionLogoutRequested: function(){
    console.log("conferenceManagementView.handleEndSessionLogoutRequested")
    this.setEndSessionTime();
    this.model.save()
      .done(this.handleLogout)
      .fail(this.handleEndSessionLogoutRequestedFail);
  },

  handleEndSessionLogoutRequestedFail: function(response){
    response.description = "conferenceManagementView.handleEndSessionLogoutRequested";
    response.request_type = "PUT";
    response.request_resource = this.model.url();
    App.logRemoteSaveError(response);
    App.Dispatcher.trigger("logout");
  },

  handleLogout: function() {
    App.Dispatcher.trigger("logout");
  }
});
