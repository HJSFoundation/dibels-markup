App.TeacherWorkspace = Backbone.View.extend({


  events: {
    "click .stage .js-drawer-toggle": "openDrawer",
    "click .drawer .js-drawer-toggle": "closeDrawer"
  },

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listenTo(dispatcher, "initWorkspace", this.render);
  },

  render:  function() {
    this.$el = $("#applicationContainer");
    this.$el.html(this.template());
  },

  openDrawer: function(){
    this.$drawer = $(".js-drawer");
    this.$drawer.removeClass("st-closed");
    this.$drawer.addClass("st-open");
  },

  closeDrawer: function(){
    this.$drawer = $(".js-drawer");
    this.$drawer.removeClass("st-open");
    this.$drawer.addClass("st-closed");
  }

});

App.TeacherWorkspace.prototype.template = App.templates.teacherWorkspace;




