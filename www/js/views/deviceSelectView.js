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
  },

  handleClick: function() {
    this.groupManagement = new App.Views.GroupManagement({ el: this.$el});
    return false;
  }
});
