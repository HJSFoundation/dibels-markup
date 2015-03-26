App.Views.Drawer = Backbone.View.extend({
  template: App.templates.drawer,
  events: {
    "click .js-drawer-toggle" : "handleToggleDrawer",
  },

  initialize: function() {
    _.bindAll(this);
    this.listen();
    this.isOpen=false;
    this.render();
  },

  listen: function (){
    this.listenTo(App.Dispatcher, "toggleDrawer", this.handleToggleDrawer);
  },

  render:  function() {
    this.$el.html(this.template());
  },

  open: function () {
      this.$drawer = $(".js-drawer");
      this.$drawer.removeClass("st-closed");
      this.$drawer.addClass("st-open");
      this.isOpen = true;
  },
  close: function () {
    this.$drawer = $(".js-drawer");
    this.$drawer.removeClass("st-open");
    this.$drawer.addClass("st-closed");
    this.isOpen = false;
  },

  handleToggleDrawer: function() {
    if(this.isOpen){
      this.close();
    }else{
      this.open();
    }
  }

});