App.Views.ButtonManage = Backbone.View.extend({
  template: App.templates.buttonManage,

  events: {
    'click': 'handleDisplayManage'
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleDisplayManage: function() {
    console.log("handleDisplayManage");
    return false;
  }
});
