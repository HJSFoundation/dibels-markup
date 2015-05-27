App.Views.EditStudentNotesListView = Backbone.View.extend({
  template: App.templates.editStudentNotesList,

  events: {
    "click": "handleClick"
  },

  noteViews: [],

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function(){
    this.listenTo(App.Dispatcher, "editStudentNoteSelected", this.handleEditStudentNoteSelected);
    this.listenTo(App.notes, "change", this.render);
  },

  render: function() {
    // var notes = App.notes.where({user_id: App.selectedStudent.get("id")});
    var notes = _.sortBy(App.notes.models, function(note){
      return -(new Date(note.get("updated_at")).valueOf());
    });
    this.$el.html(this.template());
    var that = this;
    _.each(notes, function(note){
      var noteView = new App.Views.EditStudentNoteView({model: note});
      that.noteViews.push(noteView);
      $(".js-editStudentNote").append(noteView.render().el);
    });
    return this;
  },

  makeActive: function(noteView){
    this.makeInactive();
    noteView.makeActive();
  },

  makeInactive: function(){
    _.each(this.noteViews, function(noteView){
      noteView.makeInactive();
    });
  },

  handleEditStudentNoteSelected: function(noteView){
    this.makeInactive();
    this.makeActive(noteView);
  }
});
