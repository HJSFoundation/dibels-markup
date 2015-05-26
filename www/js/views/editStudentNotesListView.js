App.Views.EditStudentNotesListView = Backbone.View.extend({
  template: App.templates.editStudentNotesList,

  events: {
    "click": "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    // var notes = App.notes.where({user_id: App.selectedStudent.get("id")});
    var notes = App.notes.models;
    this.$el.append(this.template());
    _.each(notes, function(note){
      $(".js-editStudentNote").append(new App.Views.EditStudentNoteView({model: note}).render().el)
    });
    return this;
  }
});
