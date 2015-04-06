

App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

  initialize: function() {
    _.bindAll(this);

    this.render();
    App.students.each(function(student){
      var view = new App.Views.Tab({model: student, el: ".js-matrixStudentSelectorTabs"}); 
    });
  },

  render:  function() {
    this.$el.html(this.template());
  }
});