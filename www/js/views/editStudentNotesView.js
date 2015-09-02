App.Views.EditStudentNotes = Backbone.View.extend({
  template: App.templates.editStudentNotes,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "editStudentNoteSelected", this.handleEditStudentNoteSelected);
    this.listenTo(App.Dispatcher, "editStudentNewNote", this.handleEditStudentNewNote);
  },

  render: function() {
    this.$el.html(this.template());
    var noteModel = new App.Models.Note().set(
    {
      "taken_at": App.newISODate(),
      "classroom_id": App.currentTeacher.classroom_id,
      "author_id": App.currentTeacher.id,
      "user_id": App.selectedStudent.id
    });

    this.article = new App.Views.EditStudentNotesArticle({ el: ".js-editStudentNotesArticle" });
    this.list = new App.Views.EditStudentNotesList({ el: ".js-editStudentNotesList" });
    this.article.render(noteModel);
    this.list.render();
    return this;
  },

  handleEditStudentNewNote: function(noteModel) {
    this.article.render(noteModel);
  },

  handleEditStudentNoteSelected: function(noteView) {
    this.article.render(noteView.model);
  }
});
