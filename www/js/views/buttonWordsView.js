App.Views.ButtonWords = Backbone.View.extend({
  template: App.templates.buttonWords,

events: {
    "click": "handleClick"
  },
  status: "",
  activity: "words",

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

  },

  makeInactive: function() {
    this.status = "";
    this.render();
  },

  handleClick: function() {
    App.Dispatcher.trigger("activityMenuButtonActiveRequest", this.activity);
    return false;
  }
});
