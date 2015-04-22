App.Views.Drawer = Backbone.View.extend({
  template: App.templates.drawer,

  events: {
    "click .js-drawer-toggle" : "handleToggleDrawerRequest",
    "click .js-reading-stage" : "handleReadingStageRequest",
    "click .js-assessments" : "handleAssessmentsRequest",
    "click .js-assignments" : "handleAssignmentsRequest",
    "click .js-whiteboard" : "handleWhiteboardRequest",
    "click .js-leveled-stageStories" : "handleLeveledStageStoriesRequest",
  },

  initialize: function() {
    _.bindAll(this);
    this.listen();
    this.isOpen = false;
    this.render();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "toggleDrawerRequest", this.handleToggleDrawerRequest);
  },

  render: function() {
    this.$el.html(this.template());
    this.cacheElements();
  },

  cacheElements: function() {
    this.$drawer = $(".js-drawer");
  },

  open: function() {
    this.$drawer.removeClass("st-closed");
    this.$drawer.addClass("st-open");
    this.isOpen = true;
  },

  close: function() {
    this.$drawer.removeClass("st-open");
    this.$drawer.addClass("st-closed");
    this.isOpen = false;
  },

  handleToggleDrawerRequest: function() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  },

  handleReadingStageRequest: function() {
    this.readingStageView = new App.Views.ReadingStage({ el: ".js-overlay" });
  },

  handleAssessmentsRequest: function() {
    this.assessmentView = new App.Views.Assessment({ el: ".js-overlay" });
  },

  handleAssignmentsRequest: function() {
    this.assignmentsView = new App.Views.Assignment({ el: ".js-overlay" });
  },

  handleWhiteboardRequest: function() {
    this.whiteboardView = new App.Views.Whiteboard({ el: ".js-overlay" });
  },

  handleLeveledStageStoriesRequest: function() {
    this.leveledStageStoriesView = new App.Views.LeveledStageStories({ el: ".js-overlay" });
  }
});
