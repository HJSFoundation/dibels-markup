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
    if (newContent !== this.model.get("content")) {
      this.model.set({
        content: newContent,
        client_updated_at: new Date(),
        taken_at: new Date()
      });
      App.notes.add(this.model);

      var d = new Date();
      App.notesLastTakenAt = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + "T" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      localStorage.setItem("App.notesLastTakenAt", App.notesLastTakenAt);

      this.model.save()
        .done(this.logSuccess)
        .fail(this.logfailure);
    }
  },

  logfailure: function() {
    console.log("EditStudentNotesArticle: model saved failed");
  },

  logSuccess: function() {
    console.log("EditStudentNotesArticle: model successfully saved");
  }
});
