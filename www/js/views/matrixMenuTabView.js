App.Views.MatrixMenuTab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function() {
    _.bindAll(this);
    this.templateContext = {jsClass:this.$el.attr("class")};
    this.render();
  },

  render:  function() {
    this.$el.replaceWith(this.template(this.templateContext));
    this.setElement("a."+this.templateContext.jsClass);
  },

  makeActive: function(){
    this.templateContext.status="st-active";
    this.render();
  }
});