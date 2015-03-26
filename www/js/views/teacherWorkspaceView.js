App.Views.TeacherWorkspace = Backbone.View.extend({
  template: App.templates.teacherWorkspace,
  // events: {
  //   "click .stage .js-drawer-toggle": "openDrawer",
  //   "click .drawer .js-drawer-toggle": "closeDrawer"
  // },

  initialize: function() {
    _.bindAll(this);
    this.render();
    // this.activeStudent = this.collection.first();
    // this.drawerView = App.Views.Drawer({ el: "#drawer" });
    this.stageView = new App.Views.Stage({ el: ".stage"});

    this.matrixView = new App.Views.Matrix({ el: ".matrix"});

  },

  render:  function() {
    this.$el.html(this.template());

  }

  // openDrawer: function(){
  //   this.$drawer = $(".js-drawer");
  //   this.$drawer.removeClass("st-closed");
  //   this.$drawer.addClass("st-open");
  // },

  // closeDrawer: function(){
  //   this.$drawer = $(".js-drawer");
  //   this.$drawer.removeClass("st-open");
  //   this.$drawer.addClass("st-closed");
  // }
});