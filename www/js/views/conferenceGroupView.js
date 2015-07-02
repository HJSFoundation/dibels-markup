App.Views.ConferenceGroup = Backbone.View.extend({
  template: App.templates.conferenceGroup,

  tagName: "tr",
  className: "student-row--group",

  events: {
    "click .js-startSession": "handleStartSession",
    "click .js-studentGroup": "handleGroupDropdown",
    "change .js-editNumberPerWeek": "handleEditNumberPerWeek"

  },

  initialize: function(options) {
    _.bindAll(this);
    this.students = options.students;
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$el.find("#numberPerWeekSelect").val(this.model.get("number_per_week").toString());

    return this;
  },

  templateJSON: function() {
    return {
      name: this.model.get("name"),
      daysSinceLastSession: this.daysSinceLastSession()
    };
  },

  daysSinceLastSession: function() {
    return Math.round(moment.utc().set({hour:0, minute:0, second:0}).diff(this.model.lastConferenceSessionAt().set({hour:0, minute:0, second:0}),"days", true));
  },

  handleGroupDropdown: function() {
    App.Dispatcher.trigger("conferenceGroupDropdownRequested:" + this.model.get("id"));
  },

  handleStartSession: function() {
    App.students.add(this.students);
    App.selectedStudent = App.students.at(0);
    App.selectedConference = this.model;
    App.Dispatcher.trigger("startSessionRequested");
    return false;
  },

  handleEditNumberPerWeek: function(){
    this.model.set("number_per_week", parseInt(this.$el.find("#numberPerWeekSelect").val()));
    this.model.set("client_updated_at", App.newISODate());
    this.model.save();
    return false;
  }

});

