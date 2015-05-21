App.Views.EditStudent = Backbone.View.extend({
  template: App.templates.editStudent,

  events: {
    "click": "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleClick: function() {
    this.remove();
    return false;
  }
});
