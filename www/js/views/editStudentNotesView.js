App.Views.EditStudentNotesView = Backbone.View.extend({
  template: App.templates.editStudentNotes,

  events: {
  },

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
      "created_at": new Date(),
      "updated_at": new Date(),
      "classroom_id": App.loggedInTeacher.classroom_id,
      "author_id": App.loggedInTeacher.id,
      "user_id": App.selectedStudent.id
    });

    this.article = new App.Views.EditStudentNotesArticleView({el: ".js-editStudentNotes"});
    this.list = new App.Views.EditStudentNotesListView({el: ".js-editStudentNotes"});
    this.article.render(noteModel);
    this.list.render();
    return this;
  },

  handleEditStudentNoteSelected: function(noteModel){
    this.article.render(noteModel);
  }

});
