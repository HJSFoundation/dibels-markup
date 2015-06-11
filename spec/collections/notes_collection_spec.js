describe('App.Collections.Notes', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.Notes();
  });

  it("has a note model", function() {
    expect(new subject.model()).to.be.an.instanceof(App.Models.Note);
  });

  xit("#parse", function() {

  });

  it("sets the url", function() {
    expect(subject.url()).to.equal(App.url + "/classrooms/" + App.loggedInTeacher.classroom_id + "/notes");
  });
});
