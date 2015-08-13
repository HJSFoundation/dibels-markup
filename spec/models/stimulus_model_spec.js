describe('App.Models.Stimulus', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.Stimulus({value: "a", reading_stage: 1, skill:"letterNames", assessment: "mastered"});
  });

  it("has a stimulus value", function() {
    expect(subject.get("value")).to.equal("a");
  });

  it("has a reading_stage", function() {
    expect(subject.get("reading_stage")).to.equal(1);
  });

  it("has a skill", function() {
    expect(subject.get("skill")).to.equal("letterNames");
  });

  it("has an assessment", function() {
    expect(subject.get("assessment")).to.equal("mastered");
  });

  it("sets the urlRoot", function() {
    expect(subject.urlRoot()).to.equal(App.url() +"/stimuli");
  });

  it("#local", function(){
    App.Config.storageLocalState = false;
    expect(subject.local()).to.equal(false);
    App.Config.storageLocalState = true;
    expect(subject.local()).to.equal(true);
  });

});
