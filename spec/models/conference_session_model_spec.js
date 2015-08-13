describe('App.Models.ConferenceSession', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.ConferenceSession();
  });

  it("sets the urlRoot", function() {
    expect(subject.urlRoot()).to.equal(App.url() +"/conference_sessions");
  });

  it("#local", function(){
    App.Config.storageLocalState = false;
    expect(subject.local()).to.equal(false);
    App.Config.storageLocalState = true;
    expect(subject.local()).to.equal(true);
  });

  describe("#parse", function(){
    it("returns resp if conference_session is not in the response", function() {
      var resp = {id: 1};
      expect(subject.parse(resp)).to.equal(resp);
    });

    it("sets resp.conference_sessions if conference_session is in the response", function() {
      var resp = {conference_session: {id: 1}};
      expect(subject.parse(resp)).to.equal(resp.conference_session);
    });
  });
});
