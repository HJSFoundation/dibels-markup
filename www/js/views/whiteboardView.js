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
    this.$el.removeClass("st-flipped");
    return this.$el.html(this.template());
  },

  setFlipped: function(flipped){
    this.flipped = flipped;
    if(App.selectedActivity === "whiteboard"){
      this.setFlippedOnMagnets();
    }
  },

  setFlippedOnMagnets: function(){
    if(this.flipped){
      $(".js-magnetText").addClass("st-flipped");
    }else{
      $(".js-magnetText").removeClass("st-flipped");
    }
  },

  handleSkillChangeRequest: function(stimulus_object) {
    this.render();
  },

  handleEnterKeyPressed: function() {
    $(".js-whiteboard").append( new App.Views.Magnet({flipped: this.flipped, text: $("input").val()}).render());
    $("input").val("");
    $( ".js-magnet" ).draggable({
      snap: true,
      cursor: "move",
      containment: $(".stage--whiteboard")
    });
  },

  handleKeyUp: function(keyEventObject) {
    if (keyEventObject.keyCode === 13) {
      this.handleEnterKeyPressed();
    }
    return false;
  }
});
