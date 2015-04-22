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

    subject = new App.Models.Stimulus({stimulus: "a", stage: 1, skill:"letterNames", assessment: "mastered"});
  });

  it("has a stimulus", function() {
    expect(subject.get("stimulus")).to.equal("a");
  });

  it("has a stage", function() {
    expect(subject.get("stage")).to.equal(1);
  });

  it("has a skill", function() {
    expect(subject.get("skill")).to.equal("letterNames");
  });

  it("has an assessment", function() {
    expect(subject.get("assessment")).to.equal("mastered");
  });
});
