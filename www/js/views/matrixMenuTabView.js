App.Views.MatrixMenuTab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function(options) {
    _.bindAll(this);
    // this.status = "st-inactive";
    this.label = options.label;
    this.render();
  },

  render:  function() {

    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      label: this.label,
      status: this.status
    };
  },

  makeActive: function(){
    this.status = "st-active";
    this.render();
  }
});
