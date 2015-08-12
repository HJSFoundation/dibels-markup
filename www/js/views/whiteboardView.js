App.Views.Whiteboard = Backbone.View.extend({
  template: App.templates.whiteboard,

  initialize: function() {
    _.bindAll(this);
  },

  events: {
    "keyup": "handleKeyUp"
  },

  render: function() {
    App.Dispatcher.trigger('closeMatrix');
    App.Dispatcher.trigger('displayOpenMatrixButton', false);
    App.Dispatcher.trigger('displayMenuAssessment', false);

    return this.$el.html(this.template());
  },

  handleSkillChangeRequest: function(stimulus_object){
    this.render();
  },

  handleEnterKeyPressed: function(){
    $(".js-whiteboard").append( new App.Views.Magnet({text: $("input").val()}).render());
    $("input").val("");
    $( ".js-magnet" ).draggable({
      snap: true,
      cursor: "move",
      containment: $(".stage--whiteboard")
    });
  },

  handleKeyUp: function(keyEventObject){
    if(keyEventObject.keyCode===13){
      this.handleEnterKeyPressed();
    }
   return false;
  }
});
