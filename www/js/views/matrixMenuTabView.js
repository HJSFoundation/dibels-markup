App.Views.MatrixMenuTab = Backbone.View.extend({
  template: App.templates.tab,


  initialize: function() {
    _.bindAll(this);
    this.template = this.template({jsClass:this.$el.attr("class")});
    this.$el.replaceWith(this.template);
    this.setElement(this.template);
  },

  render:  function() {
    this.$el.html(this.template);
  },

  makeActive: function(){
    this.$el.addClass("is-active");
  }
});