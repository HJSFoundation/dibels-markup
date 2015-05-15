App.Views.GroupManagement = Backbone.View.extend({
  template: App.templates.groupManagement,

  events: {
    "click" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();

    App.students = new App.Collections.Students();
    for(var i=0; i <= App.Config.maxStudentCount; i = i+1){
      App.students.add(App.roster.at(i));
    }

    App.students.at(0).set("reading_stage",4);
    App.students.at(1).set("reading_stage",5);
    App.students.at(2).set("reading_stage",6);
    App.students.at(3).set("reading_stage",1);
    App.students.at(4).set("reading_stage",2);
    App.students.at(5).set("reading_stage",3);

    App.selectedStudent = App.students.at(0);
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
