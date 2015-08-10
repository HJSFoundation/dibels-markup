App.Views.Whiteboard = Backbone.View.extend({
  template: App.templates.whiteboard,

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    App.Dispatcher.trigger('closeMatrix');
    App.Dispatcher.trigger('displayOpenMatrixButton', false);
    App.Dispatcher.trigger('displayMenuAssessment', false);

    return this.$el.html(this.template());
  },

  handleSkillChangeRequest: function(stimulus_object){
    this.render();
  }
});
