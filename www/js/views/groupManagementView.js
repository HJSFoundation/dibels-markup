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
    return this;
  },

  handleClick: function() {
    this.teacherWorkspace = new App.Views.TeacherWorkspace({el: App.Config.el});
    this.remove();
    return false;
  }
});
