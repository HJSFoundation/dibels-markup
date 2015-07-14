describe('App.Models.Conference', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.Conference();
  });

  it("sets the urlRoot", function() {
    expect(subject.urlRoot()).to.equal(App.url +"/conferences");
  });

  it("#local", function(){
    App.Config.storageLocalState = false;
    expect(subject.local()).to.equal(false);
    App.Config.storageLocalState = true;
    expect(subject.local()).to.equal(true);
  });

  describe("#lastConferenceSessionAt", function() {
    it("returns model's last_conference_session_at value if it is not null", function() {

      subject.set({
        last_conference_session_at: "2015-06-30T01:23:00.000Z",
        number_per_week: 5
      });

      expect(subject.lastConferenceSessionAt().toISOString()).to.equal("2015-06-30T01:23:00.000Z");
    });

    it("returns default value if it is null", function() {

      subject.set({
        last_conference_session_at: null,
        number_per_week: 5
      });

      expect(subject.lastConferenceSessionAt().toISOString()).to.equal("2015-07-01T00:00:00.000Z");
    });
  });
});
