App.Views.EditStudentNotesView = Backbone.View.extend({
  template: App.templates.editStudentNotes,

  events: {
  },

  initialize: function() {
    _.bindAll(this);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      notes: App.notes.models
    }
  }

});
