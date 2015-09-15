App.Views.ButtonMatrixReadingStageNumber = Backbone.View.extend({
  template: App.templates.buttonMatrixReadingStageNumber,

  tagName: "a",
  // className: "",

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.append(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function(){
    return {
      readingStage: App.selectedStudent.get("reading_stage")
    };
  }

  // handleCloseMatrix: function() {
  //   App.Dispatcher.trigger('closeMatrix');
  // }
});
