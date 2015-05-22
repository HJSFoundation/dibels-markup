App.Views.EditStudentReadingStageView = Backbone.View.extend({
  template: App.templates.editStudentReadingStage,

  events: {
    "click .reading-stage__choice": "handleReadingStageChoice"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    console.log("EditStudentReadingStageView: should render current stage highlighted");
   
    return this;
  },

  templateJSON: function() {
    return {
    }
  },

  handleReadingStageChoice: function(readingStageChoiceClickEvent){
    var readingStage = parseInt(readingStageChoiceClickEvent.currentTarget.innerText);
    App.selectedStudent.set({reading_stage: readingStage});
    // App.selectedStudent.save();
    console.log("EditStudentReadingStageView:handleReadingStageChoice should POST user_reading_stages model")
  }

});
