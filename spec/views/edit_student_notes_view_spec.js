describe('App.Views.EditStudentNotes', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    sinon.stub(_, "bindAll");
    appendFixture("div", { class: "js-stageEditStudentNotes" });
    subject = new App.Views.EditStudentNotes({ el: '.js-stageEditStudentNotes' });
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#initialize", function() {
    it("calls render on initialize", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("calls listen on initialize", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });
  });

  describe("#listen", function() {
    it("listens to editStudentNoteSelected", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "editStudentNoteSelected", subject.handleEditStudentNoteSelected);
    });

    it("listens to editStudentNewNote", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "editStudentNewNote", subject.handleEditStudentNewNote);
    });
  });

  describe("#render", function() {
    it("creates a new Article view", function() {
      subject.render();
      expect(subject.article).to.be.an.instanceOf(App.Views.EditStudentNotesArticle);
    });

    it("creates a list view", function() {
      subject.render();
      expect(subject.list).to.be.an.instanceOf(App.Views.EditStudentNotesList);
    });

    xit("calls render on the article", function() {
      subject.render();
      sinon.spy(subject.article, "render");
      expect(subject.article.render).to.have.been.called;
    });

    xit("calls render on the list", function() {
      subject.render();
      sinon.spy(subject.list, "render");
      expect(subject.list.render).to.have.been.called;
    });

    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });
  });

  describe("handlers", function() {
    it("#handleEditStudentNoteSelected", function() {
      subject.render();
      sinon.spy(subject.article, "render");
      subject.handleEditStudentNoteSelected(new App.Views.EditStudentNote({ model: new App.Models.Note }));
      expect(subject.article.render).to.have.been.called;
    });

    it("#handleEditStudentNewNote", function() {
      subject.render();
      sinon.spy(subject.article, "render");
      var noteView = new App.Models.Note();
      subject.handleEditStudentNewNote(noteView);
      expect(subject.article.render).to.have.been.calledWith(noteView);
    });
  });
});
