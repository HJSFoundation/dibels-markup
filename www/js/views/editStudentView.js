App.Views.EditStudent = Backbone.View.extend({
  template: App.templates.editStudent,

  events: {
    "click #js-editReadingStage": "handleTabRequest",
    "click #js-editAssignments": "handleTabRequest",
    "click #js-editNotes": "handleTabRequest",
  },

  tabs: [
    "#js-editReadingStage",
    "#js-editAssignments",
    "#js-editNotes"
  ],

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      reading_stage: App.selectedStudent.get("reading_stage"),
      student_shortname: App.selectedStudent.shortName()
    }
  },

  makeActive: function(tabId){
    $("#" + tabId).addClass("st-selected");
  },

  makeInactive: function(){
    for(var i=0;i< this.tabs.length; i=i+1){
      $(this.tabs[i]).removeClass("st-selected");
    }
  },

  handleTabRequest: function(tabClickEvent) {
    console.log("handleTabRequest:"+tabClickEvent.currentTarget.id);
    this.makeInactive();
    this.makeActive(tabClickEvent.currentTarget.id);
    return false;
  }

});
