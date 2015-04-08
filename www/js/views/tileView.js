App.Views.Tile = Backbone.View.extend({
  template: App.templates.tile,

  initialize: function(options) {
    _.bindAll(this);
    this.index = options.index
    this.render();
  },

  render:  function() {
    this.$el.append(this.template({index: this.index, stimulus: this.model.get("stimulus")}));
  }
});