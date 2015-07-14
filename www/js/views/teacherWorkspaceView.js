App.Views.TeacherWorkspace = Backbone.View.extend({
  template: App.templates.teacherWorkspace,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.navMainView = new App.Views.NavMain({ el: ".js-navMain"});
    this.stageView = new App.Views.Stage({ el: ".js-stage"});
    this.matrixView = new App.Views.Matrix({ el: ".js-matrix"});
  },

  render: function() {
    this.$el.html(this.template());
  }
});
