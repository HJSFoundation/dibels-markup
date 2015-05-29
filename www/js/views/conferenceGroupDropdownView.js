App.Views.ConferenceGroupDropdown = Backbone.View.extend({
  template: App.templates.conferenceGroupDropdown,

  tagName: "tr",
  className: "session-row--dropdown js-groupDropdown st-hidden",

  initialize: function(options) {
    this.students = options.students;
    this.conferenceId = options.conferenceId;
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "conferenceGroupDropdownRequested:"+this.conferenceId, this.handleGroupDropdown);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      students: this.students
    };
  },

  handleGroupDropdown: function(){
    console.log("ConferenceGroupDropdown:handleGroupDropdown");
    this.$el.toggleClass("st-hidden");
  }

});
