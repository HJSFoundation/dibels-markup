App.Views.ConferenceStudent = Backbone.View.extend({
  template: App.templates.conferenceStudent,

  tagName: "tr",
  className: "student-row--group",

  events: {
  },

  initialize: function(options) {
    _.bindAll(this);

  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      // shortName: TODO start here with getting the student model out of the conference in conf mamagement
    };
  },

  handleClick: function() {
    return false;
  }
});
