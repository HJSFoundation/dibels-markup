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

  describe("it has events", function() {
    it("has a focus textarea event", function() {
      expect(subject.events["focus textarea"]).to.equal("handleFocus");
    });

    it("has a click save note event", function() {
      expect(subject.events["click .js-saveNote"]).to.equal("handleSaveNote");
    });

    it("has a click cancel edit event", function() {
      expect(subject.events["click .js-cancelEdit"]).to.equal("handleCancelEdit");
    });

    it("has a click new note event", function() {
      expect(subject.events["click .js-newNote"]).to.equal("handleNewNote");
    });
  });

  describe("renders", function() {
    it("sets this model to the parameter note model", function() {
      subject.render(model);
      expect(subject.model).to.equal(model);
    });

    it("renders the template", function() {
      subject.render(model);
      expect(subject.$el).not.to.be.empty;
    });

    it("returns the view", function() {
      expect(subject.render(model)).to.equal(subject);
    });
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

    it("#handleCancelEdit", function() {
      subject.render(model);
      $(subject.$el.selector + " textarea").val("new content");
      subject.handleCancelEdit();
      expect($(subject.$el.selector + " textarea").val()).to.equal("new01234567890123456789012345678901234567890123456789");
    });

    it("triggers the editStudentNewNote event with a new note model parameter", function() {
      sinon.spy(App.Dispatcher, "trigger");

      var noteModel = {
        set: function(object){ return this;},
        get: function(object){},
        updatedDate: function(){return "";},
        bind: function () {},
        listenTo: function () {},
        listenToOnce: function () {},
        off: function () {},
        on: function () {},
        once: function () {},
        stopListening: function () {},
        trigger: function trigger() {},
        unbind: function () {}
      };

      sinon.stub(App.Models, "Note", function(){
        return noteModel;
      });

      subject.handleNewNote();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("editStudentNewNote", noteModel);
      App.Dispatcher.trigger.restore();
      App.Models.Note.restore();
    });

    describe("#handleSaveNote", function() {
      it("saves the model", function() {
        subject.render(model);
        $(subject.$el.selector+" textarea").val("hello");

        sinon.stub(subject.model, 'save').returns({
          fail: function(){
          }
        });

        subject.handleSaveNote();
        expect(subject.model.save).to.have.been.called;
        subject.model.save.restore();
      });

      // TODO: test fails on save

      it("adds the model to the notes collection", function() {
        subject.render(model);
        $(subject.$el.selector+" textarea").val("hello");

        sinon.stub(subject.model, 'save').returns({
          fail: function(){
          }
        });
        App.notes = new App.Collections.Notes();
        var lengthOfCollection = App.notes.length;
        subject.handleSaveNote();
        expect(App.notes.length).to.equal(lengthOfCollection+1);
        subject.model.save.restore();

      });
    });
  });
});
