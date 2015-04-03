App.Models.Student = Backbone.Model.extend({

  defaults:  {
    grade: 1
  },

  shortName: function() {
    return (this.get("firstName")+" "+this.get("lastName")[0]+".").toUpperCase();
  }
});
