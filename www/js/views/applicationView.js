App.Views.Application = Backbone.View.extend({
  initialize: function() {
    this.loginView = new App.Views.Login({ el: this.$el });
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  
    App.students = new App.Collections.Students();
    App.students.fetch();
    if(App.students.length===0){
      var letters = {};
      var a="a".charCodeAt(0);
      var z="z".charCodeAt(0);

      for( var c=a; c<=z;c++){
        letters[String.fromCharCode(c)]={assessment:"clear"};
      }

      var A="A".charCodeAt(0);
      var Z="Z".charCodeAt(0);

      for( var c=A; c<=Z;c++){
        letters[String.fromCharCode(c)]={assessment:"clear"};
      }

      console.log(letters);
      App.students.create({firstname: "Bernie", lastname: "Bivins", letters: letters});
      App.students.create({firstname: "Matt", lastname: "Bivins", letters: letters});
      App.students.create({firstname: "Evan", lastname: "Bivins", letters: letters});
      App.students.create({firstname: "Clint", lastname: "Eastman", letters: letters});
      App.students.create({firstname: "Hugo", lastname: "Bloch", letters: letters});

    }


  },

  handleLoggedIn: function() {
    this.teacherWorkspaceView = new App.Views.TeacherWorkspace({ el: this.$el});
  }
});
