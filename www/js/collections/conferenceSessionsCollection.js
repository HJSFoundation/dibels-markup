App.Collections.ConferenceSessions = Backbone.Collection.extend({
  model: App.Models.ConferenceSession,

  url: function() {
    return App.url + "/conference_sessions";
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if (this.local()) {
      return resp;
    } else {
      return resp.conference_sessions;
    }
  }
});
