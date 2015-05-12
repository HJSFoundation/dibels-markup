App.Models.Student = Backbone.Model.extend({

  id: "",
  first_name: "",
  last_name: "",
  reading_stage: "",

  local: true,


  shortName: function() {
    return (this.get("first_name")+" "+this.get("last_name").charAt(0)+".").toUpperCase();
  }
});
