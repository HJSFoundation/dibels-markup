App.Views.EditStudentNote = Backbone.View.extend({
  template: App.templates.editStudentNote,

  tagName: "li",

  events: {
    "click": "handleClick"
  },

  initialize: function() {
    _.bindAll(this);
    this.listen();
  },

  listen: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      updatedDate: this.model.updatedDate(),
      shortContent: this.model.shortContent()
    }
  },

  makeActive: function(){
    this.$el.addClass("st-selected");
  },

  makeInactive: function(){
    this.$el.removeClass("st-selected");
  },

  handleClick: function(){
    App.Dispatcher.trigger("editStudentNoteSelected", this);
    console.log("EditStudentNote:click")
  }

});
