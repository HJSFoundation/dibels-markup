App.Views.EditStudentNotesArticleView = Backbone.View.extend({
  template: App.templates.editStudentNotesArticle,

  events: {
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function(noteModel) {
    this.model = noteModel;
    this.$el.append(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      date: this.model.updatedDate(),
      content: this.model.get("content")
    }
  }

});
