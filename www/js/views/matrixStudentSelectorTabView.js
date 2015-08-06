App.Views.MatrixStudentSelectorTab = Backbone.View.extend({
  template: App.templates.matrixStudentSelectorTab,

  tagName: "a",
  className: "menu--tab grid grid-cell grid--center",

  events: {
    "click .js-editStudentButton": "handleIconClick",
    "click .js-exitEditStudent": "handleCloseRequest",
    "click": "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.label = this.model.shortName();
    this.user_id = this.model.get("id");
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      label: this.label,
      reading_stage: this.model.get("reading_stage")
    };
  },

  makeActive: function() {
    this.render();
    this.$el.addClass("st-active");
  },

  makeInactive: function() {
    this.$el.removeClass("st-active");
  },

  handleClick: function() {
    if (this.model.get("reading_stage") !== App.selectedStudent.get("reading_stage")) {
      App.Dispatcher.trigger("StageClearRequested");
    }
    var previous = App.selectedStudent;
    App.selectedStudent = this.model;
    App.Dispatcher.trigger("matrixStudentSelectorTabActiveRequest",
      { current: this.model,
        previous: previous
      }
    );
    return false;
  },

  handleIconClick: function(event) {
    this.editStudent = new App.Views.EditStudent({el: ".js-overlay"});
    return false;
  },

  handleCloseRequest: function() {
    this.$el.closest(".js-overlay").empty();
    return false;
  }
});
