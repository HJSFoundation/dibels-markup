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

  makeActive: function(readingStage){
    var choices = $(".reading-stage__choice");
    $(choices[readingStage-1]).addClass("st-selected");
  },

  makeInactive: function(){
    $(".reading-stage__choice").removeClass("st-selected");
  },

  handleReadingStageChoice: function(readingStageChoiceClickEvent){
    var readingStage = parseInt(readingStageChoiceClickEvent.currentTarget.innerText);
    this.makeInactive();
    this.makeActive(readingStage);
    App.selectedStudent.set({reading_stage: readingStage});
    console.log("EditStudentReadingStage:handleReadingStageChoice should POST user_reading_stages model")
  }

});
