App.Views.TeacherWorkspace = Backbone.View.extend({
  template: App.templates.teacherWorkspace,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.stageView = new App.Views.Stage({ el: ".js-stage"});
    this.matrixView = new App.Views.Matrix({ el: ".js-matrix"});
  },

  render: function() {
    this.$el.html(this.template());
  }
});
