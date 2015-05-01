App.Views.GroupManagement = Backbone.View.extend({
  template: App.templates.groupManagement,

  events: {
    "click" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();

    App.students = new App.Collections.Students();
    for(var i=0; i < App.Config.maxStudentCount; i = i+1){
      App.students.add(App.roster.at(i));
    }

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
    return false;
  }
});
