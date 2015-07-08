App.Collections.Students = Backbone.Collection.extend({
  model: App.Models.Student,

  url: function(){
    return App.url + "/classrooms/" + App.currentTeacher.classroom_id + "/students";
  },

  comparator: "first_name",

  local: function(){
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if(this.local()){
      return resp;
    }else{
      return resp.students;
    }
  }
});
