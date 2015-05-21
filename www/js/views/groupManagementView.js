App.Views.GroupManagement = Backbone.View.extend({
  template: App.templates.groupManagement,

  events: {
    "click" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();

    var testReadingStage = [5,4,7,9,2,3];
    App.students = new App.Collections.Students();
    for(var i=0; (i <= App.Config.maxStudentCount) && (i<App.roster.length); i = i+1){
      App.students.add(App.roster.at(i));

      App.students.at(i).set("reading_stage",testReadingStage[i]);
    }

    console.log("App.roster.length:", App.roster.length);

    if(App.students.length>0){
      App.selectedStudent = App.students.at(0);
    }
    App.selectedSkill = "";

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function() {
    this.teacherWorkspace = new App.Views.TeacherWorkspace({el: App.Config.el});
    this.remove();
    console.log("click:GroupManagement");
    return false;
  }
});
