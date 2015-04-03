// App.Views.MatrixStudentSelector = Backbone.View.extend({
//   template: App.templates.matrixStudentSelector,

// config: {
//     tabCount: 5
//   },

//   initialize: function() {
//     _.bindAll(this);
//     this.render();
//     this.tabViews=[];
//     for(var i=0;i<this.config.tabCount;i++){
//       this.tabViews[i] = new App.Views.Tab({label: "tab", el: ".js-matrixStudentSelectorTabs"});
//       this.$el.append(this.tabViews[i].el); 
//     }
//     // this.tabViews[0].makeActive();

//   },

//   render:  function() {
//     this.$el.html(this.template());
//   }
// });

App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

  initialize: function() {
    _.bindAll(this);

    var students = new App.Collections.Students();
    students.fetch();
    if(students.length===0){
      students.create({firstname: "Bernie", lastname: "Bivins"});
      students.create({firstname: "Matt", lastname: "Bivins"});
      students.create({firstname: "Evan", lastname: "Bivins"});
      students.create({firstname: "Clint", lastname: "Eastman"});
      students.create({firstname: "Hugo", lastname: "Bloch"});

    }

    this.render();
    students.each(function(student){
      var view = new App.Views.Tab({model: student, el: ".js-matrixStudentSelectorTabs"}); 
    });
  },

  render:  function() {
    this.$el.html(this.template());
  }
});