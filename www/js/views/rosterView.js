App.Views.Roster = Backbone.View.extend({
  template: App.templates.roster,

  events: {
    "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  removeView: function() {
    this.$el.empty();
    console.log("click:App.Views.Roster")
    return false;
  }
});
