App.Views.EditStudentReadingStage = Backbone.View.extend({
  template: App.templates.editStudentReadingStage,

  events: {
    "click .reading-stage__choice": "handleReadingStageChoice"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template());
    this.makeActive(App.selectedStudent.get("reading_stage"));
    console.log("EditStudentReadingStage: should render current stage highlighted");
    return this;
  },

  makeActive: function(readingStage) {
    var choices = $(".reading-stage__choice");
    $(choices[readingStage - 1]).addClass("st-selected");
  },

  makeInactive: function() {
    $(".reading-stage__choice").removeClass("st-selected");
  },

  handleReadingStageChoice: function(readingStageChoiceClickEvent) {
    var readingStage = parseInt(readingStageChoiceClickEvent.currentTarget.innerHTML);
    this.makeInactive();
    this.makeActive(readingStage);
    App.selectedStudent.set({reading_stage: readingStage});
    var model = new App.Models.UserReadingStages({
      student_id: App.selectedStudent.get("id"),
      assessor_id: App.currentTeacher.id,
      reading_stage: readingStage.toString(),
      context: "teacher_notepad",
      changed_at: App.newISODate()
    });
    App.userReadingStages.add(model);

    model.save()
      .done(this.updateUser)
      .fail(this.updateLocalUser);
  },

  updateUser: function() {
    console.log("EditStudentReadingStage.updateUser");
    App.roster.fetch()
      .fail(this.updateLocalUser);
  },

  updateLocalUser: function(response) {
    response.description = "editStudentReadingStage.handleReadingStageChoice";
    App.logRemoteSaveError(response);
    App.selectedStudent.save();
  }
});
