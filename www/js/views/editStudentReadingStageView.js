App.Views.EditStudentReadingStage = Backbone.View.extend({
  template: App.templates.editStudentReadingStage,

  events: {
    "click .js-readingStageChooser": "handleReadingStageChoice",
    "click .js-currentReadingStage": "handleCurrentReadingStage",
    "click .js-initialReadingStage": "handleInitialReadingStage",
  },

  initialize: function() {
    _.bindAll(this);
    this.isInitialReadingStage = false;
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.makeActive(this.isInitialReadingStage ? App.selectedStudent.get("initial_reading_stage") : App.selectedStudent.get("reading_stage"));
    return this;
  },

  templateJSON: function(){
    return {
      currentReadingStage: App.selectedStudent.get("reading_stage"),
      initialReadingStage: App.selectedStudent.get("initial_reading_stage"),
      initialReadingStageSelected: (this.isInitialReadingStage? "st-selected" : ""),
      currentReadingStageSelected: (this.isInitialReadingStage? "" : "st-selected"),
      initialClass: (this.isInitialReadingStage? "st-initial" : "")
    }
  },

  makeActive: function(readingStage) {
    var choices = $(".reading-stage__choice");
    $(choices[readingStage + 1]).addClass("st-selected");
  },

  makeInactive: function() {
    $(".reading-stage__choice").removeClass("st-selected");
  },

  handleReadingStageChoice: function(readingStageChoiceClickEvent) {
    var readingStage = parseInt(readingStageChoiceClickEvent.currentTarget.innerHTML);

    if(this.isInitialReadingStage){
      App.selectedStudent.set({initial_reading_stage: readingStage});

    }else{
      App.selectedStudent.set({reading_stage: readingStage});
    }

    this.makeInactive();
    this.makeActive(readingStage);
    var model = new App.Models.UserReadingStages({
      student_id: App.selectedStudent.get("id"),
      assessor_id: App.currentTeacher.id,
      reading_stage: readingStage.toString(),
      context: "teacher_notepad",
      initial: this.isInitialReadingStage,
      changed_at: App.newISODate()
    });

    if(this.isInitialReadingStage){
      model.set({initial_reading_stage_updated_at: App.newISODate()});
    }

    App.userReadingStages.add(model);

    // TODO write spec and test error handling

    model.save()
      .done(this.updateUser)
      .fail(this.updateLocalUser);

    this.render();
  },

  handleCurrentReadingStage: function(){
    this.isInitialReadingStage = false;
    this.render();
  },

  handleInitialReadingStage: function(){
    this.isInitialReadingStage = true;
    this.render();
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
