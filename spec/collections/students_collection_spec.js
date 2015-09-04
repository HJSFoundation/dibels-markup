describe('App.Collections.Students', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.Students();
  });

  it("has a comparator", function() {
    expect(subject.comparator).to.equal("first_name");
  });

  it("#url", function() {
    expect(subject.url()).to.equal(App.url() + "/classrooms/" + App.currentTeacher.classroom_id + "/students");
  });

  xit("#parse", function() {

  });
});

