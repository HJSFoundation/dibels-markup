App.Views.GroupManagement = Backbone.View.extend({
  template: App.templates.groupManagement,

  events: {
    "click" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleClick: function() {
    this.$el.empty();
    this.teacherWorkspace = new App.Views.TeacherWorkspace({ el: this.$el});
    return false;
  }
});
