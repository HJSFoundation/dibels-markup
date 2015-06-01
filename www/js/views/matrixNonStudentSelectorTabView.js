App.Views.MatrixNonStudentSelectorTab = Backbone.View.extend({
  template: App.templates.matrixNonStudentSelectorTab,

  tagName: "a",
  className: "menu--tab grid-cell",

  events: {
    "click": "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.label = "Student";
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      label: this.label
    };
  },

  handleClick: function(event) {
    this.conferenceManagementSingle = new App.Views.ConferenceManagementSingle({el: ".js-overlay"});
    return false;
  },
});
