App.Collections.Notes = Backbone.Collection.extend({
  model: App.Models.Note,

  url: function(){
    return App.url + "/classrooms/" + App.loggedInTeacher.classroom_id + "/notes";
  },

  comparator: "taken_at",

  local: function(){
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if(this.local()){
      return resp;
    }else{
      return resp.notes;
    }
  }
});
