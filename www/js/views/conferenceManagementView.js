App.Views.ConferenceManagement = Backbone.View.extend({
  template: App.templates.conferenceManagement,

  conferenceGroups: {},

  events: {
    'click .js-manageButton': 'handleDisplayManage'
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
  },

  render: function() {
    this.$el.html(this.template());
    this.$tbody = this.$el.find("tbody");
    var groupConferences = App.conferences.where({conference_type: "group", classroom_id: App.loggedInTeacher.classroom_id});

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

    var studentConferences = App.conferences.where({conference_type: "user", classroom_id: App.loggedInTeacher.classroom_id});
    _.each(studentConferences, function(studentConference) {
      var view = this.conferenceGroups[studentConference.get("id")] = new App.Views.ConferenceStudent({ model: studentConference});
      this.$tbody.append(view.render().el);
    }, this);

    return this;
  },

  setStartSessionTime: function(){
    this.model = new App.Models.ConferenceSession({
      "conference_id":App.selectedConference.id,
      "user_id":App.loggedInTeacher.id,
      "classroom_id":App.loggedInTeacher.classroom_id,
      "context": "teacher_notepad",
      "started_at":new Date(),
      "ended_at":"",
    });
    this.model.save();
  },

  setEndSessionTime: function(){
    this.model.set({ended_at: new Date()});
    this.model.save();
    document.removeEventListener("pause");

  },

  handleStartSessionRequested: function() {
    console.log("handleStartSessionRequested");
    this.setStartSessionTime();
    $(App.Config.el).empty();
    this.teacherWorkspace = new App.Views.TeacherWorkspace({el: App.Config.el});
    document.addEventListener("pause", this.handlePauseEvent, false);

    return false;
  },

  handlePauseEvent: function(){
    this.setEndSessionTime();

  },

  handleEndSessionRequested: function() {
    this.setEndSessionTime();
    App.Dispatcher.trigger("initializeConferenceManagementRequested");
  },

  handleDisplayManage: function() {
    App.browser = window.open(App.Config.tutormateUrl + "/students/"+App.loggedInTeacher.classroom_id, "_blank", "location=yes");

    console.log("handleDisplayManage");
    return false;
  }
});
