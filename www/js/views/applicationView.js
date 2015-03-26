App.Views.ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.loginView = new App.Views.Login({ el: this.$el });
    this.listenTo(App.Dispatcher, "loginSuccess", this.handleLoggedIn);

  },

  handleLoggedIn: function() {
    this.teacherWorkspaceView = new App.Views.TeacherWorkspace({ el: this.$el});
  }
})