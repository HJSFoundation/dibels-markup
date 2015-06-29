describe('App.Collections.ConferenceSessions', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.ConferenceSessions();
  });

  it("has a conference sessions model", function() {
    expect(new subject.model()).to.be.an.instanceof(App.Models.ConferenceSession);
  });

  it("#local", function(){
    App.Config.storageLocalState = false;
    expect(subject.local()).to.equal(false);
    App.Config.storageLocalState = true;
    expect(subject.local()).to.equal(true);
  });

  describe("#parse", function(){
    it("returns resp if local returns true", function() {
      App.Config.storageLocalState = true;
      var resp = {id: 1};
      expect(subject.parse(resp)).to.equal(resp);
    });

    it("returns resp conference_sessions if local returns false", function() {
      App.Config.storageLocalState = false;
      var resp = {conference_sessions: {id: 1}};
      expect(subject.parse(resp)).to.equal(resp.conference_sessions);
    });
  });

  it("sets the url", function() {
    expect(subject.url()).to.equal(App.url + "/conference_sessions");
  });
});
