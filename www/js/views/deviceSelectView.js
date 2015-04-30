App.Views.DeviceSelect = Backbone.View.extend({
  template: App.templates.deviceSelect,

  events: {
    "click .js-teacherDevice" : "handleClick"
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
    this.groupManagement = new App.Views.GroupManagement();
    $(App.Config.el).append(this.groupManagement.render().el);
    this.remove();
    return false;
  }
});
