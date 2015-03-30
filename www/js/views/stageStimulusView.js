App.Views.StageStimulus = Backbone.View.extend({
  template: App.templates.stageStimulus,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template());
  }
});
