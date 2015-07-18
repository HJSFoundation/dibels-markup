App.Collections.Conferences = Backbone.Collection.extend({
  model: App.Models.Conference,

  url: function() {
    return App.url + "/classrooms/" + App.currentTeacher.classroom_id + "/conferences";
  },

  comparator: function(model) {
    var msPerDay = 1000 * 60 * 60 * 24;
    var date1 = model.lastConferenceSessionAt().set({ hour:0, minute:0, second:0 });
    var date2 = moment().utc().set({ hour:0, minute:0, second:0 });
    var timeSinceLastConference = Math.abs(date2.valueOf() - date1.valueOf());
    var desiredTimeBetweenConf = 7 * msPerDay/model.get("number_per_week");
    return desiredTimeBetweenConf - timeSinceLastConference;
  },

  local: function() {
    return App.Config.storageLocalState;
  },

  parse: function(resp, xhr) {
    if (this.local()) {
      return resp;
    } else {
      return resp.conferences;
    }
  }
});
