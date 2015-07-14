App.Collections.NetworkErrors = Backbone.Collection.extend({
  model: App.Models.NetworkError,

  url: function(){
    return App.url + "/client_errors";
  },

  local: function(){
    return App.Config.storageLocalState;
  }

});
