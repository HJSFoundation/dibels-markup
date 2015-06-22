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
      this.model.save()
        .done(this.addModel)
        .fail(this.logfailure);
    }
  },

  logfailure: function() {
    console.log("EditStudentNotesArticle: model saved failed");
  },

  addModel: function() {
    App.notes.add(this.model);
    console.log("EditStudentNotesArticle: model successfully saved");
  }
});
