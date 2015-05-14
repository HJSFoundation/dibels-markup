App.Views.StoryPage = Backbone.View.extend({
  template: App.templates.storyPage,

  storyStimulusEl: ".js-storyFlip",

  events:{
    // "click" : "removeView"
  },

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.stageStories, this.handleStoryChangeRequest);
    this.listenTo(App.Dispatcher, "flipStoryButtonTapped", this.handleFlipStoryRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    $('.stage--story__gallery').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

    this.storyButtonFlipView = new App.Views.ButtonFlip({el: ".js-storyButtonFlip", eventName: "flipStoryButtonTapped"});
  },

  templateJSON: function(){
    return {
      pages: this.pages
    }
  },

  removeView: function() {
    this.$el.empty();
    console.log("click:StoryPage");

    return false;
  },

  handleStoryChangeRequest: function(event_payload) {
    var storiesForStage = App.StageStories[App.selectedStudent.get("reading_stage")];
    var index = _.findIndex(storiesForStage, function(story){
      return story.id === event_payload.id;
    });
    this.pages = _.clone(storiesForStage[index].pages);
    _.each(this.pages, function(page){
      page.linesArray = page.lines.split("\n");
    })
    this.render();
  },

  handleFlipStoryRequest: function() {
    var $sel = $(this.storyStimulusEl);
    if (this.flipped) {
      $sel.addClass("st-unflipped");
      $sel.removeClass("st-flipped");
      $(".js-storyTextTeacher").hide();
    } else {
      $sel.addClass("st-flipped");
      $sel.removeClass("st-unflipped");
      $(".js-storyTextTeacher").show();
    }
    this.flipped = !this.flipped;
  }
});
