App.Views.MatrixStudentSelectorTab = Backbone.View.extend({
  template: App.templates.matrixStudentSelectorTab,

  tagName: "a",
  className: "menu--tab grid-cell",

  events: {
    "click .icon": "handleIconClick",
    "click": "handleClick"
  },

  status: "inactive",

  initialize: function(options) {
    _.bindAll(this);
    this.label = this.model.shortName();
    this.id = this.model.get("id");
    this.readingStage = this.model.get("readingStage");
    this.editStudent = new App.Views.EditStudent({el: ".js-overlay"});
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

  handleClick: function(event){
    console.log("click tab");
    App.Dispatcher.trigger("matrixStudentSelectorTabActiveRequest", this);
    return false;
  },

  handleIconClick: function(event){
    App.Dispatcher.trigger("matrixStudentSelectorTabEditRequest", this);
    console.log("click icon");
    this.editStudent.render();
    return false;
  }
});
