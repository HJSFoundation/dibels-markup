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

    subject = new App.Models.Conference(
     {last_conference_session_at: "2015-06-30T1:23",
      number_per_week: 5
    });
  });

  it("sets the urlRoot", function() {
    expect(subject.urlRoot()).to.equal(App.url +"/conferences");
  });

  it("#convertDate", function() {
    expect(subject.convertDate("2015-06-30T1:23")).to.eql(new Date(2015,5,30,1,23));
  });

  it("#local", function(){
    App.Config.storageLocalState = false;
    expect(subject.local()).to.equal(false);
    App.Config.storageLocalState = true;
    expect(subject.local()).to.equal(true);
  });

  describe("#lastConferenceSessionAt", function() {
    it("", function() {
      sinon.spy(subject, "convertDate");
      subject.lastConferenceSessionAt();
      expect(subject.convertDate).to.have.been.calledWith(subject.get("last_conference_session_at"));
    });

    it("", function() {

    });
  });
});
