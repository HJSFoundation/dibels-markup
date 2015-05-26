App.Views.EditStudentNoteView = Backbone.View.extend({
  template: App.templates.editStudentNote,

  tagName: "li",
  
  events: {
    "click": "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      updatedDate: this.model.updatedDate(),
      shortContent: this.model.shortContent()
    }
  },

  handleClick: function(){
    App.Dispatcher.trigger("editStudentNoteSelected", this.model);
  }

});
