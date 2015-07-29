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
    // TODO write spec and test error handling

    model.save()
      .done(this.updateUser)
      .fail(this.updateLocalUser);
  },

  updateUser: function() {
    console.log("EditStudentReadingStage.updateUser");
    // TODO test error handling
    // App.roster.fetch()
    //   .fail(this.updateLocalUserFetch);
    App.roster.fetch(
      {
        error: this.updateLocalUserFetch
      });
  },

  updateLocalUser: function(response) {
    response.description = "editStudentReadingStage.handleReadingStageChoice";
    response.request_type = "POST";
    response.request_resource = new App.Models.UserReadingStages().url();
    App.logRemoteSaveError(response);
    App.database.update("roster", App.selectedStudent);
  },

  updateLocalUserFetch: function(response) {
    response.description = "editStudentReadingStage.handleReadingStageChoice";
    response.request_type = "GET";
    response.request_resource = new App.Collections.UserReadingStages().url();
    App.logRemoteSaveError(response);
    App.database.update("roster", App.selectedStudent);
  }
});
