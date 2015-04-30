App.Models.Student = Backbone.Model.extend({

  user_id: "",
  first_name: "",
  last_name: "",
  reading_stage: "",

  defaults: {
    grade: 1
  },

  shortName: function() {
    return (this.get("first_name")+" "+this.get("last_name").charAt(0)+".").toUpperCase();
  }
});
