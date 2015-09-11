App.Views.ConferenceStudent = Backbone.View.extend({
  template: App.templates.conferenceStudent,

  tagName: "tr",
  className: "student-row--group",

  events: {
    "click .js-startSession": "handleStartSession",
    "change .js-editNumberPerWeek": "handleEditNumberPerWeek"
  },

  initialize: function() {
    _.bindAll(this);
    this.studentModel = App.roster.where({ id: this.model.get("user_ids")[0] })[0];
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$el.find("#numberPerWeekSelect").val(this.model.get("number_per_week").toString());
    return this;
  },

  templateJSON: function() {
    return {
      shortName: this.studentModel.shortName(),
      readingStage: this.studentModel.readingStage(),
      readingStageGrowth: this.studentModel.readingStageGrowth(),
      daysOnCurrentReadingStage: this.daysOnCurrentReadingStage(),
      daysSinceLastSession: this.daysSinceLastSession(),

    };
  },

  daysOnCurrentReadingStage: function() {
    return this.studentModel.daysOnCurrentReadingStage();
  },

  daysSinceLastSession: function() {
    return Math.round(moment.utc().set({ hour:0, minute:0, second:0 }).diff(this.model.lastConferenceSessionAt().set({ hour:0, minute:0, second:0 }),"days", true));
  },

  handleStartSession: function() {
    App.selectedStudent = this.studentModel;
    App.students.add(this.studentModel);
    App.selectedConference = this.model;
    App.Dispatcher.trigger("startSessionRequested");
    return false;
  },

  handleEditNumberPerWeek: function() {
    this.model.set("number_per_week", parseInt(this.$el.find("#numberPerWeekSelect").val()));
    this.model.set("client_updated_at", App.newISODate());
    // TODO test error handling
    // this.model.save(null, {
    //   description:"conferenceStudentView.handleEditNumberPerWeek",
    //   request_type: "PUT",
    //   request_resource: this.model.url()
    // })
    //   .fail(App.logRemoteSaveError);
    this.model.save(null, {
      description:"conferenceStudentView.handleEditNumberPerWeek",
      request_type: "PUT",
      request_resource: this.model.url()
    },
    {
      error: App.logRemoteSaveError
    });
    App.conferences.sort();
    App.Dispatcher.trigger("initializeConferenceManagementRequested");
    return false;
  }
});
