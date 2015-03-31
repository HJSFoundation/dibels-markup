App.Views.MatrixMenuTab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.replaceWith(this.template({jsClass:this.$el.attr("class")}));
  }
  // ,

  // makeActive: function(){
  //   this.$el.addClass("is-active");
  // }
});