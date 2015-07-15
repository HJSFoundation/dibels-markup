App.Views.NavMain = Backbone.View.extend({
  template: App.templates.navMain,

  events: {
    'click .js-menuToggle': 'handleToggleMenu',
    'click .js-manageButton': 'handleDisplayManage',
    'click .js-logout' : 'handleLogout'
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
  },

  handleDisplayManage: function() {
    App.browser = window.open(App.Config.tutormateUrl + "/students/"+App.currentTeacher.classroom_id, "_blank", "location=yes");

    console.log("handleDisplayManage");
    return false;
  },

  handleLogout: function(){
    App.Dispatcher.trigger("logout");
  }

});
