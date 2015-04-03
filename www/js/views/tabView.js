App.Views.Tab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function(options) {
    _.bindAll(this);
    this.model = options.model;
    this.render();
  },

  render:  function() {
    this.$el.append(this.template({label: this.model.get("firstname")}));
  }
  // ,

  // makeActive: function(){
  //   this.$el.addClass("is-active");
  // }
});