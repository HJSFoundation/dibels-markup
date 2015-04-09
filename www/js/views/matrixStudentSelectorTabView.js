App.Views.MatrixStudentSelectorTab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.append(this.template({jsClass: "menu--tab grid-cell", label: this.model.get("firstname")}));
  }
  // ,

  // makeActive: function(){
  //   this.$el.addClass("is-active");
  // }
});