App.Views.ConferenceManagement = Backbone.View.extend({
  template: App.templates.conferenceManagement,

  events: {
    "click .js-studentGroup" : "handleGroupClick",
    "click .session-cell--start": "handleClick"
  },

  conferenceGroups: {},

  initialize: function() {
    _.bindAll(this);
    this.render();

    var testReadingStage = [5,4,7,9,2,3];
    App.students = new App.Collections.Students();
    for(var i=0; (i < App.Config.maxStudentCount) && (i<App.roster.length); i = i+1){
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
    var that = this;
    var students = App.conferences.where({conference_type: "user", classroom_id: App.loggedInTeacher.classroom_id});
    _.each(students, function(student) {
      var view = that.conferenceGroups[student.get("id")] = new App.Views.ConferenceStudent({ model: student});
      that.$el.find("tbody").append(view.render().el);
    });
    return this;
  },

  handleGroupClick: function(groupClickEvent){
    console.log("ConferenceManagement:handleGroupClick");
    $(".js-groupDropdown").toggleClass("st-hidden");
  },

  handleClick: function() {
    this.teacherWorkspace = new App.Views.TeacherWorkspace({el: App.Config.el});
    this.remove();
    console.log("click:ConferenceManagement");
    return false;
  }
});
