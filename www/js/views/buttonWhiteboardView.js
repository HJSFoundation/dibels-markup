App.Views.ButtonWhiteboard = Backbone.View.extend({
  template: App.templates.buttonWhiteboard,

  events: {
    "click": "handleClick"
  },
  status: "",
  activity: "whiteboard",

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function(){
    return {
      selectedClass: this.status
    }
  },

  makeActive: function() {
    this.status = "st-active";
    this.render();
    App.selectedActivity = this.key;
    console.log("button whiteboard active");

  },

  makeInactive: function() {
    this.status = "";
    this.render();
    console.log("button whiteboard inactive");

  },

  handleClick: function() {
    App.Dispatcher.trigger("activityMenuButtonActiveRequest", this.activity);
    console.log("button whiteboard clicked");
    return false;
  }
});
