describe('App.Models.Note', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.Note({
      "id": 80,
      "classroom_id": 91,
      "author_id": 313,
      "user_id": 3715,
      "content": "new01234567890123456789012345678901234567890123456789",
      "program_type": "teacher_notepad",
      "test": false,
      "archived": false,
      "taken_at": "2015-05-27T14:34:28.712Z",
      "updated_at": "2015-05-27T14:34:28.712Z",
      "created_at": "2015-05-27T14:34:28.712Z"
    });
  });

  it("has a content value", function() {
    expect(subject.get("content")).to.equal("new01234567890123456789012345678901234567890123456789");
  });

  it("has a user id", function() {
    expect(subject.get("user_id")).to.equal(3715);
  });

  it("has an author id", function() {
    expect(subject.get("author_id")).to.equal(313);
  });

  it("has a classroom id", function() {
    expect(subject.get("classroom_id")).to.equal(91);
  });

  it("#shortContent", function() {
    expect(subject.shortContent().length).to.equal(43);
  });

  it("#updatedDate", function() {
    expect(subject.updatedDate()).to.equal("May 27, 2015");
  });

  it("sets the urlRoot", function() {
    expect(subject.urlRoot()).to.equal(App.url + "/notes");
  });

  it("#local", function(){
    App.Config.storageLocalState = false;
    expect(subject.local()).to.equal(false);
    App.Config.storageLocalState = true;
    expect(subject.local()).to.equal(true);
  });

  describe("#parse", function(){
    it("sets id to resp id if note is not in the response", function() {
      var resp = {id: 1};
      expect(subject.parse(resp)).to.equal(resp);
    });

    it("sets id to resp id if note is not in the response", function() {
      var resp = {note: {id: 1}};
      expect(subject.parse(resp)).to.equal(resp.note);
    });
  });

});
