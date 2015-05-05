App.Views.ButtonTiles = Backbone.View.extend({
  template: App.templates.buttonTiles,

  events: {
    "click": "handleClick"
  },
  status: "",
  activity: "tiles",

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
    console.log("button tiles active");

  },

  makeInactive: function() {
    this.status = "";
    this.render();
    console.log("button tiles inactive");

  },

  handleClick: function() {
    App.Dispatcher.trigger("activityMenuButtonActiveRequest", this.activity);
    console.log("button tiles clicked");
    return false;
  }
});
