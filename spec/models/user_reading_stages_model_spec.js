describe('App.Models.UserReadingStages', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.UserReadingStages({student_id: 1, accessor_id: 1, reading_stage: "1", context: "teacher_notepad"});
  });

  it("sets the urlRoot", function() {
    expect(subject.urlRoot).to.equal(App.url+"/user_reading_stages");
  });

  it("has a student_id value", function() {
    expect(subject.get("student_id")).to.equal(1);
  });

  it("has a accessor_id value", function() {
    expect(subject.get("accessor_id")).to.equal(1);
  });

  it("has a reading_stage", function() {
    expect(subject.get("reading_stage")).to.equal("1");
  });

  it("has a context", function() {
    expect(subject.get("context")).to.equal("teacher_notepad");
  });
});
