var App = App || {};

App.Login = Backbone.View.extend({

  events: {
    "click #submit" : "transitionToWorkspace",
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el = $("#applicationContainer");
    this.$el.html(this.template());
  },

  transitionToWorkspace: function() {
    dispatcher.trigger("initWorkspace");
  }

});

App.Login.prototype.template = App.templates.login;


