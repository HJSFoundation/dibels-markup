App.Models.Student = Backbone.Model.extend({
  id: "",
  first_name: "",
  last_name: "",
  reading_stage: "",

  local: function() {
    return App.Config.storageLocalState;
  },

  readingStage: function() {
    return this.get("reading_stage");
  },

  shortName: function() {
    return (this.get("first_name") + " " + this.get("last_name").charAt(0) + ".").toUpperCase();
  },

  daysOnCurrentReadingStage: function() {
    var updatedDate = this.get("reading_stage_updated_at");
    updatedDate = (updatedDate ? moment.utc(updatedDate).set({ hours: 0, minutes: 0, seconds: 0 }) : moment.utc().set({ hours: 0, minutes: 0, seconds: 0 }));
    return moment.utc().diff(updatedDate, "days");
  }
});
