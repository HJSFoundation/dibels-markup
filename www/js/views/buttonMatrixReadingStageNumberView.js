App.Views.ButtonMatrixReadingStageNumber = Backbone.View.extend({
  template: App.templates.buttonMatrixReadingStageNumber,

  tagName: "a",
  className: "menu--tab menu--tab--reading-stage",


  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "readingStageDownRequest", this.handleReadingStageDownRequest);
    this.listenTo(App.Dispatcher, "readingStageUpRequest", this.handleReadingStageUpRequest);
  },

  render: function() {
    this.$el.append(this.template(this.templateJSON()));
    return this;
  },

  changedStageStateClass: function () {
    return App.selectedStudent.displayedReadingStage() === App.selectedStudent.readingStage() ? "" : "st-changed-stage";
  },

  templateJSON: function(){
    return {
      readingStage: App.selectedStudent.displayedReadingStage(),
      changedStageStateClass: this.changedStageStateClass()
    };
  },

  handleReadingStageUpRequest: function() {
    this.stopListening();
    App.selectedStudent.set({displayedReadingStage: Math.min(App.selectedStudent.displayedReadingStage()+1, App.Config.maxStageCount)});
    App.Dispatcher.trigger("matrixStudentSelectorTabActiveRequest",
      { current: App.selectedStudent,
        previous: App.selectedStudent
      }
    );
  },

  handleReadingStageDownRequest: function() {
    this.stopListening();
    App.selectedStudent.set({displayedReadingStage: Math.max(App.selectedStudent.displayedReadingStage()-1, 1)});
    App.Dispatcher.trigger("matrixStudentSelectorTabActiveRequest",
      { current: App.selectedStudent,
        previous: App.selectedStudent
      }
    );
  }
});
