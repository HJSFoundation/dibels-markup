App.Models.Student = Backbone.Model.extend({

  firstname: "",
  lastname: "",
  reading_stage: "",

  defaults: {
    grade: 1
  },

  shortName: function() {
    return (this.get("firstname")+" "+this.get("lastname").charAt(0)+".").toUpperCase();
  }
});
