App.Views.EditStudentNotesArticle = Backbone.View.extend({
  template: App.templates.editStudentNotesArticle,

  events: {
    "focus textarea": "handleFocus",
    "click .js-saveNote": "handleSaveNote",
    "click .js-cancelEdit": "handleCancelEdit",
    "click .js-newNote": "handleNewNote"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function(noteModel) {
    this.model = noteModel;
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      date: this.model.updatedDate(),
      content: this.model.get("content")
    };
  },

  handleFocus: function() {
    this.content = $(this.$el.selector + " textarea").val();
    console.log("EditStudentNotesArticle:handleFocus");
  },

  handleCancelEdit: function() {
    $(this.$el.selector + " textarea").val(this.model.get("content"));
  },

  handleNewNote: function() {
    var noteModel = new App.Models.Note().set(
    {
      "taken_at": App.newISODate(),
      "classroom_id": App.currentTeacher.classroom_id,
      "author_id": App.currentTeacher.id,
      "user_id": App.selectedStudent.id
    });
    App.Dispatcher.trigger("editStudentNewNote", noteModel);
  },

  handleSaveNote: function() {
    var newContent = $(this.$el.selector + " textarea").val();

    if(App.includesScriptTag(newContent)){
      return;
    }

    var existingContent = this.model.get("content");
    var request_type = existingContent ? "PUT" : "POST";

    if (newContent !== existingContent) {
      var date = App.newISODate();
      this.model.set({
        content: newContent,
        client_updated_at: date,
        taken_at: date
      });
      App.notes.add(this.model, { merge: true });  // TODO write spec and test error handling
      App.notesLastTakenAt = date;
      localStorage.setItem("App.notesLastTakenAt", App.notesLastTakenAt);
      this.render(this.model);
        this.model.save(null, {
        description:"editStudentNotesArticleView.handleBlur",
        request_type: request_type,
        request_resource: this.model.url()
      })
        .fail(App.logRemoteSaveError);
    }
  }
});
