App.Views.ConferenceStudentSingle = Backbone.View.extend({
  template: App.templates.conferenceStudentSingle,

  tagName: "tr",
  className: "student-row--group",

  events: {
    "click .js-addStudent": "handleAddStudent"
  },

  initialize: function() {
    _.bindAll(this);
    this.studentModel = App.roster.where({id: this.model.get("user_ids")[0]})[0];
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      shortName: this.studentModel.shortName(),
      reading_stage: this.studentModel.get("reading_stage"),
      daysOnCurrentReadingStage: this.daysOnCurrentReadingStage(),
      daysSinceLastSession: this.daysSinceLastSession(),
      number_per_week: this.model.get("number_per_week")
    };
  },

  daysOnCurrentReadingStage: function() {
    return this.studentModel.daysOnCurrentReadingStage();
  },

  daysSinceLastSession: function() {
    return Math.round(moment.utc().set({hour:0, minute:0, second:0}).diff(this.model.lastConferenceSessionAt().set({hour:0, minute:0, second:0}),"days", true));
  },

  handleAddStudent: function() {
    App.selectedStudent = this.studentModel;
    App.students.add(this.studentModel);
    App.Dispatcher.trigger("addStudentRequested");
    return false;
  }
});
