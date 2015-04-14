App.Views.MatrixStudentSelectorTab = Backbone.View.extend({
  template: App.templates.matrixStudentSelectorTab,

  tagName: "a",
  className: "menu--tab grid-cell",

  events: {
    "click": "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.label = this.model.shortName();
    this.id = this.model.get("id");
    this.readingStage = this.model.get("readingStage");
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      label: this.label,
      readingStage: this.readingStage
    };
  },

  makeActive: function(){
    this.$el.addClass("st-active");
  },

  makeInactive: function(){
    this.$el.removeClass("st-active");
  },

  handleClick: function(){
    App.Dispatcher.trigger("matrixStudentSelectorTabActiveRequest", this);
  }
});
