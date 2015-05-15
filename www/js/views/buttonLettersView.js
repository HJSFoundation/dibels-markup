App.Views.ButtonLetters = Backbone.View.extend({
  template: App.templates.buttonLetters,

  events: {
    "click": "handleClick"
  },
  status: "",
  activity: "letters",

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
    console.log("button letters clicked");
    return false;
  }
});
