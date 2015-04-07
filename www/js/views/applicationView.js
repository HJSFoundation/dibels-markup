App.Views.Application = Backbone.View.extend({
  initialize: function() {
    this.loginView = new App.Views.Login({ el: this.$el });
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);
  
    App.stimuli = new App.Collections.Stimuli();
    App.stimuli.fetch();
    if(App.stimuli.length===0){

      var letters = [];
      var a="a".charCodeAt(0);
      var z="z".charCodeAt(0);
      var c;
      for( c = a; c <= z; c = c + 1){
        App.stimuli.create({stage: 0, skill:"letter sounds", stimulus: String.fromCharCode(c), assessment:"clear"});
      }

      var A="A".charCodeAt(0);
      var Z="Z".charCodeAt(0);

      for(  
        c=A; c<=Z;c=c+1){
        App.stimuli.create({stage: 0, skill:"letter sounds", stimulus: String.fromCharCode(c), assessment:"clear"});
      }

      console.log(App.stimuli);
    }
    App.students = new App.Collections.Students();
    App.students.fetch();
    if(App.students.length===0){
      App.students.create({id: 1, firstname: "Bernie", lastname: "Bivins"});
      App.students.create({id: 2, firstname: "Matt", lastname: "Bivins"});
      App.students.create({id: 3, firstname: "Evan", lastname: "Bivins"});
      App.students.create({id: 4, firstname: "Clint", lastname: "Eastman"});
      App.students.create({id: 5, firstname: "Hugo", lastname: "Bloch"});

    }


  },

  handleLoggedIn: function() {
    this.teacherWorkspaceView = new App.Views.TeacherWorkspace({ el: this.$el});
  }
});
