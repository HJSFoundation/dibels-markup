App.Views.StageStimulusLettersCell = Backbone.View.extend({
  template: App.templates.stageStimulusLettersCell,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
