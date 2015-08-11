App.Models.NetworkError = Backbone.Model.extend({
  urlRoot: function() {
    return App.url()+ "/client_errors";
  },

  local: function() {
    return App.Config.storageLocalState;
  }
});
