App.Views.ConferenceGroup = Backbone.View.extend({
  template: App.templates.conferenceGroup,

  tagName: "tr",
  className: "student-row--group",

  events: {
    "click .js-startSession": "handleStartSession",
    "click .js-studentGroup": "handleGroupDropdown"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.students = options.students;
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {

      name: this.model.get("name"),
      daysSinceLastSession: this.daysSinceLastSession(),
      number_per_week: this.model.get("number_per_week")
    };
  },

  daysSinceLastSession: function(){
    return Math.ceil((new Date().valueOf() - new Date(this.model.get("last_conference_date").valueOf())) / (1000* 3600 *24));
  },

  handleGroupDropdown: function(){
    App.Dispatcher.trigger("conferenceGroupDropdownRequested:"+this.model.get("id"));
  },

  handleStartSession: function() {
    App.students.add(this.students);
    App.selectedStudent = App.students.at(0);
    App.Dispatcher.trigger("startSessionRequested");
    return false;
  }
});
