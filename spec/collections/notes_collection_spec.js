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

  it("has a storeName", function() {
    expect(subject.storeName).to.equal("App.notes");
  });

  it("has a comparator", function() {
    expect(subject.comparator).to.equal("taken_at");
  });

  xit("#parse", function() {

  });

  describe("#url", function() {
    it("sets the url to the default when App.notesLastTakenAt is not defined", function() {
      App.notesLastTakenAt = null;
      expect(subject.url()).to.equal(App.url() + "/classrooms/" + App.currentTeacher.classroom_id + "/notes");
    });

    it("adds taken_at and date to the default url when App.notesLastTakenAt is defined", function() {
      App.notesLastTakenAt = "2015-06-30";
      expect(subject.url()).to.equal(App.url() + "/classrooms/" + App.currentTeacher.classroom_id + "/notes?taken_at="+"2015-06-30");
    });
  });
});
