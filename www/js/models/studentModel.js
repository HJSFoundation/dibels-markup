App.Models.Student = Backbone.Model.extend({

  id: "",
  first_name: "",
  last_name: "",
  reading_stage: "",

  local: App.Config.storageLocalState,

  readingStage: function(){
    return this.get("reading_stage");
  },

  shortName: function() {
    return (this.get("first_name")+" "+this.get("last_name").charAt(0)+".").toUpperCase();
  },

  daysOnCurrentReadingStage: function(){
    var updatedDate = this.get("reading_stage_updated_at");

    updatedDate = (updatedDate?updatedDate:new Date());

    return Math.ceil((new Date().valueOf() - new Date(updatedDate).valueOf()) / (1000* 3600 *24));

  }
});
