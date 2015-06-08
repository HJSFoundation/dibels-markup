describe('App.Views.EditStudentNotesList', function() {
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
    subject = new App.Views.EditStudentNotesList({el: '#applicationContainer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("calls listen on initialize", function() {
    sinon.spy(subject, "listen");
    subject.initialize();
    expect(subject.listen).to.have.been.called;
  });

  describe("#listen", function() {
    it("listens for editStudentNoteSelected", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "editStudentNoteSelected", subject.handleEditStudentNoteSelected);
    });

    it("listens for change on App.notes", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.notes, "change", subject.render);
    });
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });
  });

  describe("handlers", function() {
    describe("#handleEditStudentNoteSelected", function() {
      it(" calls makeInactive", function() {
        sinon.spy(subject, "makeInactive");
        subject.handleEditStudentNoteSelected(new App.Views.EditStudentNote({model: new App.Models.Note}));
        expect(subject.makeInactive).to.have.been.called;
      });

      it(" calls makeActive", function() {
        sinon.spy(subject, "makeActive");
        var noteView = new App.Views.EditStudentNote({model: new App.Models.Note});
        subject.handleEditStudentNoteSelected(noteView);
        expect(subject.makeActive).to.have.been.calledWith(noteView);
      });
    });
  });

  describe("helpers", function() {
    it("#makeInactive", function() {
      var noteView = new App.Views.EditStudentNote({model: new App.Models.Note});
      subject.noteViews.push(noteView);
      sinon.spy(noteView, "makeInactive");
      subject.makeInactive();
      expect(noteView.makeInactive).to.have.been.called;
    });

    it("makeActive", function() {
      var noteView = new App.Views.EditStudentNote({model: new App.Models.Note});
      sinon.spy(noteView, "makeActive");
      subject.makeActive(noteView);
      expect(noteView.makeActive).to.have.been.called;
    });
  });
});
