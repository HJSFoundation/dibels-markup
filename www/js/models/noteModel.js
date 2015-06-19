App.Models.Note = Backbone.Model.extend({

  urlRoot: function(){
    return App.url + "/notes"
  },

  defaults: {
    "content": "",
    "program_type": "teacher_notepad"
  },

  local: function(){
    return App.Config.storageLocalState;
  },

  shortContent: function() {
    var maxChars = 40;
    var content = this.get("content");
    var s = content.slice(0, maxChars);
    if(content.length > maxChars){
      s = s + "...";
    }
    return s;
  },

  updatedDate: function() {
    var update = new Date(this.get("taken_at"));
    var months = ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
    var month = months[update.getMonth()];
    var day = update.getDate();
    var year = update.getFullYear();

    return month + " " + day + ", " + year;
  },

  parse: function(resp, xhr) {
    if(!resp.note){
      return resp;
    }else{
      return resp.note;
    }
  }

});
