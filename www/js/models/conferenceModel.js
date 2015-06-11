App.Models.Conference = Backbone.Model.extend({

  urlRoot: function(){
    return App.url +"/conferences";
  },

  local: App.Config.storageLocalState
});
