describe('App.Views.EditStudentNotesArticle', function() {
  var subject;
  var xhr;
  var requests;
  var model;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    sinon.stub(_, "bindAll");
    subject = new App.Views.EditStudentNotesArticle({el: '#applicationContainer'});
    model = new App.Models.Note({
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

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("renders", function() {
    subject.render(model);
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function() {
    subject.render(model);
    expect(subject.templateJSON().date).to.equal("May 27, 2015");
    expect(subject.templateJSON().content).to.equal("new01234567890123456789012345678901234567890123456789");
  });

  describe("handlers", function() {
    it("#handleFocus", function() {
      subject.render(model);
      subject.handleFocus();
      expect(subject.content).to.equal("new01234567890123456789012345678901234567890123456789");
    });

    it("#handleBlur", function() {
      subject.render(model);
      // sinon.spy(subject.model, "save");
      $(subject.$el.selector+" textarea").val("hello");


      sinon.stub(subject.model, 'save').returns({
        done: function(){
          return {fail: function(){}}
        }
      });


      subject.handleBlur();
      expect(subject.model.save).to.have.been.called;
    });
  });

  describe("helper functions", function() {
    it("#addModel", function() {
      subject.render(model);
      var notesLength = App.notes.length;
      subject.addModel();
      expect(App.notes.length).to.equal(notesLength + 1);
    });
  });
});
