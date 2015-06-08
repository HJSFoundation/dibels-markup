App.Views.EditStudent = Backbone.View.extend({
  template: App.templates.editStudent,

  editContainer: ".js-editContainer",
  $editContainer: null,
  ids: [
    "js-editReadingStage",
    "js-editNotes"
  ],
  views: {},

  events: {
    "click .js-editStudentButtonClose": "handleCloseRequest",
    "click #js-editReadingStage": "handleTabRequest",
    "click #js-editNotes": "handleTabRequest",
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.$editContainer = $(this.editContainer);
    this.views["js-editNotes"] = new App.Views.EditStudentNotes({el: this.editContainer});
    this.views["js-editReadingStage"] = new App.Views.EditStudentReadingStage({el: this.editContainer});
    this.makeActive(this.ids[1]);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      reading_stage: App.selectedStudent.get("reading_stage"),
      student_shortname: App.selectedStudent.shortName()
    };
  },

  makeActive: function(tabId) {
    $("#" + tabId).addClass("st-selected");
    this.views[tabId].render();
  },

  makeInactive: function() {
    for (var i=0; i< this.ids.length; i += 1) {
      $("#" + this.ids[i]).removeClass("st-selected");
    }
    this.$editContainer.empty();
  },

  handleTabRequest: function(tabClickEvent) {
    console.log("handleTabRequest:" + tabClickEvent.currentTarget.id);
    this.makeInactive();
    this.makeActive(tabClickEvent.currentTarget.id);
    return false;
  },

  handleCloseRequest: function () {
    this.$el.empty();
  }
});
