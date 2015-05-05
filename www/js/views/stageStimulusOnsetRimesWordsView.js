App.Views.StageStimulusOnsetRimesWords = Backbone.View.extend({
  template: App.templates.stageStimulusOnsetRimesWords,

  initialize: function() {
    _.bindAll(this);
  },

  render: function(stimulus_object) {
    this.$el.html(this.template(stimulus_object));
  }

});
