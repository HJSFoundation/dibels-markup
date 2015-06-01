App.Views.ConferenceManagement = Backbone.View.extend({
  template: App.templates.conferenceManagement,

  conferenceGroups: {},

  initialize: function() {
    _.bindAll(this);

    App.students = new App.Collections.Students();
    App.selectedSkill = "";

    this.listen();
    this.render();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "startSessionRequested", this.handleStartSessionRequested);
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

  handleStartSessionRequested: function() {
    this.teacherWorkspace = new App.Views.TeacherWorkspace({el: App.Config.el});
    this.remove();
    return false;
  }
});
