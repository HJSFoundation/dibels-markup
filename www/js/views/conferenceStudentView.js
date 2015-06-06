App.Views.ConferenceStudent = Backbone.View.extend({
  template: App.templates.conferenceStudent,

  tagName: "tr",
  className: "student-row--group",

  events: {
    "click .js-startSession": "handleStartSession"
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
    return Math.ceil((new Date().valueOf() - new Date(this.model.get("last_conference_date").valueOf())) / (1000 * 3600 * 24));
  },

  handleStartSession: function() {
    App.selectedStudent = this.studentModel;
    App.students.add(this.studentModel);
    App.Dispatcher.trigger("startSessionRequested");
    return false;
  }
});
