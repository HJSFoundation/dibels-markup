App.Views.StageStimulusPhrases = Backbone.View.extend({
  template: App.templates.stageStimulusPhrases,

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template());
  }
});
