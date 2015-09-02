App.Views.StageStoryPage = Backbone.View.extend({
  template: App.templates.stageStoryPage,

  storyStimulusEl: ".js-storyFlip",
  stories: [],
  pages: [],
  storyId: null,

  initialize: function() {
    _.bindAll(this);
    this.listen();
    for (var stage = 1; stage <= App.Config.maxStageCount; stage += 1) {
      this.stories[stage] = _.where(App.Stories, { reading_level: App.stageStoryReadingStageMap[stage], story_type: "controlled" });
    }
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.stageStories, this.handleStoryChangeRequest);
    this.listenTo(App.Dispatcher, "flipStoryButtonTapped", this.handleFlipStoryRequest);
    this.listenTo(App.Dispatcher, "CloseStoryPage", this.handleCloseStoryPage);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    $('.stage--story__gallery').flickity({
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });
    if (App.selectedStudent.get("reading_stage") >= App.Config.minReadingStageForStrategies) {
      this.readingStrategies = new App.Views.ReadingStrategies({el: ".js-readingStrategies" });
    }
    this.storyButtonFlipView = new App.Views.ButtonFlip({el: ".js-storyButtonFlip", eventName: "flipStoryButtonTapped"});
    this.storyButtonCloseStoryView = new App.Views.ButtonCloseStory({el: ".js-storyButtonCloseStory"});
  },

  templateJSON: function() {
    return {
      pages: this.pages,
      storyId: this.storyId
    };
  },

  removeView: function() {
    this.$el.empty();
    return false;
  },

  handleStoryChangeRequest: function(event_payload) {
    var storiesForStage = this.stories[App.selectedStudent.get('reading_stage')];
    var story = _.find(storiesForStage, function(story) {
      return story.content_id === event_payload.id;
    });
    this.storyId = story.content_id;
    this.pages = _.clone(story.pages);
    _.each(this.pages, function(page) {
      page.linesArray = page.lines.split("\n");
    });
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
  },

  handleCloseStoryPage: function() {
    this.removeView();
  }
});
