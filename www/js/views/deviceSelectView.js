App.Views.DeviceSelect = Backbone.View.extend({
  template: App.templates.deviceSelect,

  events: {
    "click .js-teacherDevice" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    if(this.groupManagement){
      this.groupManagement.remove();
    }
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
    console.log("click:App.Views.DeviceSelect")

    return false;
  }
});
