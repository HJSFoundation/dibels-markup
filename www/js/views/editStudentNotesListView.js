App.Views.EditStudentNotesList = Backbone.View.extend({
  template: App.templates.editStudentNotesList,

  noteViews: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "editStudentNoteSelected", this.handleEditStudentNoteSelected);
    this.listenTo(App.notes, "change", this.render);
    this.listenTo(App.notes, "add", this.render);
  },

  render: function() {
    var filteredNotes = App.notes.where({ user_id: App.selectedStudent.get("id") });
    var notes = _.sortBy(filteredNotes, function(note){
      return -(moment.utc(note.get("taken_at")).valueOf());
    });
    this.$el.html(this.template());
    var that = this;
    this.noteViews = [];
    _.each(notes, function(note) {
      var noteView = new App.Views.EditStudentNote({ model: note });
      that.noteViews.push(noteView);
      $(".js-editStudentNote").append(noteView.render().el);
    });
    return this;
  },

  makeActive: function(noteView) {
    noteView.makeActive();
  },

  makeInactive: function() {
    _.each(this.noteViews, function(noteView) {
      noteView.makeInactive();
    });
  },

  handleEditStudentNoteSelected: function(noteView) {
    this.makeInactive();
    this.makeActive(noteView);
  }
});
