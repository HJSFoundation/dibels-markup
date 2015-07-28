App.Views.EditStudentNotesArticle = Backbone.View.extend({
  template: App.templates.editStudentNotesArticle,

  events: {
    "focus textarea": "handleFocus",
    "blur textarea": "handleBlur"
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

  handleBlur: function() {
    var newContent = $(this.$el.selector + " textarea").val();
    var existingContent = this.model.get("content");
    var request_type = existingContent ? "PUT" : "POST";

    if (newContent !== existingContent) {
      var date = App.newISODate();
      this.model.set({
        content: newContent,
        client_updated_at: date,
        taken_at: date
      });
      App.notes.add(this.model, {merge: true});

      App.notesLastTakenAt = date;
      localStorage.setItem("App.notesLastTakenAt", App.notesLastTakenAt);

      // TODO write spec and test error handling

      this.model.save(null, {
        description:"editStudentNotesArticleView.handleBlur",
        request_type: request_type,
        request_resource: this.model.url()
      })
        .fail(App.logRemoteSaveError);
    }
  }
});
