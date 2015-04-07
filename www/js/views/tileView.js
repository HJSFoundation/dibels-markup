App.Views.Tile = Backbone.View.extend({
  template: App.templates.tile,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.append(this.template({stimulus: this.model.get("stimulus")}));
  }
});