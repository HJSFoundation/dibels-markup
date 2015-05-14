App.Views.ReadingStrategies = Backbone.View.extend({
  template: App.templates.readingStrategies,

  events: {
    "click .js-readingStrategiesToggle": "handleToggle"
  },

  state: false,
  stateText: "show",
  stateClass: "",


  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.stimuliTilesReadingStrategies = new App.Views.StimuliTilesReadingStrategies({el: ".js-stimuliTilesReadingStrategies"});
    this.menuAssessment = new App.Views.MenuAssessment({el: ".js-menuAssessment"});
  },

  templateJSON: function(){
    return {
      stateClass: this.stateClass,
      stateText: this.stateText
    }
  },

  handleToggle: function() {
    var stateText;
    if(this.state){
      $(".js-matrixReadingStrategies").removeClass("st-active");
      stateText="show";
    }else{
      $(".js-matrixReadingStrategies").addClass("st-active");
      stateText="hide";
    }
    this.state = !this.state;
    $(".js-readingStrategiesToggle").text(stateText+" reading strategies");

    console.log("click:ReadingStrategies");

    return false;
  }
});
