App.Collections.UserReadingStages = Backbone.Collection.extend({
  model: App.Models.UserReadingStages,

  url: function() {
    return App.url()+ "/user_reading_stages";
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if (this.local()) {
      return resp;
    } else {
      return resp.user_reading_stages;
    }
  }
});
