App.Views.EditStudentNotes = Backbone.View.extend({
  template: App.templates.editStudentNotes,

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "editStudentNoteSelected", this.handleEditStudentNoteSelected);
  },

  render: function() {
    this.$el.html(this.template());
    var noteModel = new App.Models.Note().set(
    {
      "updated_at": new Date(),
      "classroom_id": App.loggedInTeacher.classroom_id,
      "author_id": App.loggedInTeacher.id,
      "user_id": App.selectedStudent.id
    });

    this.article = new App.Views.EditStudentNotesArticle({el: ".js-editStudentNotesArticle"});
    this.list = new App.Views.EditStudentNotesList({el: ".js-editStudentNotesList"});
    this.article.render(noteModel);
    this.list.render();
    return this;
  },

  handleEditStudentNoteSelected: function(noteView){
    this.article.render(noteView.model);
  }
});
