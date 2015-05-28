App.Views.DeviceSelect = Backbone.View.extend({
  template: App.templates.deviceSelect,

  events: {
    "click .js-teacherDevice" : "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    if(this.conferenceManagement){
      this.conferenceManagement.remove();
    }
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function() {
    this.conferenceManagement = new App.Views.ConferenceManagement();
    $(App.Config.el).append(this.conferenceManagement.render().el);
    this.remove();
    console.log("click:App.Views.DeviceSelect")

    return false;
  }
});
