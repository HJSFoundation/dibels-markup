App.Views.NavMain = Backbone.View.extend({
  template: App.templates.navMain,

  events: {
    'click': 'handleToggleMenu'
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleToggleMenu: function() {
    $(".js-mainNav").toggleClass("st-show");
  }
});