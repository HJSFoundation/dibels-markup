App.Views.MatrixMenuTab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function(options) {
    this.options = options;
    _.bindAll(this);
    this.templateContext = {jsClass:this.$el.attr("class"), label:this.options.label};
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
