App.Views.EditStudentReadingStageView = Backbone.View.extend({
  template: App.templates.editStudentReadingStage,

  events: {
    "click .reading-stage__choice": "handleReadingStageChoice"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template());
    console.log("EditStudentReadingStageView: should render current stage highlighted");
   
    return this;
  },

  handleReadingStageChoice: function(readingStageChoiceClickEvent){
    var readingStage = parseInt(readingStageChoiceClickEvent.currentTarget.innerText);
    App.selectedStudent.set({reading_stage: readingStage});
    console.log("EditStudentReadingStageView:handleReadingStageChoice should POST user_reading_stages model")
  }

});
