App.Views.ButtonWhiteboard = Backbone.View.extend({
  template: App.templates.buttonWhiteboard,

  status: "",
  activity: "whiteboard",

  events: {
    "click": "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      selectedClass: this.status
    };
  },

  makeActive: function() {
    this.status = "st-active";
    this.render();
    App.selectedActivity = this.key;
  },

  makeInactive: function() {
    this.status = "";
    this.render();
  },

  handleClick: function() {
    App.Dispatcher.trigger("activityMenuButtonActiveRequest", this.activity);
    console.log("button whiteboard clicked");
    return false;
  }
});
