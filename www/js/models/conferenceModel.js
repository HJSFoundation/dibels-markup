App.Models.Conference = Backbone.Model.extend({

  urlRoot: function(){
    return App.url +"/conferences";
  },

  local: function(){
    return App.Config.storageLocalState;
  }

});
