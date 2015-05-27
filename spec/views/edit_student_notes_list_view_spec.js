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
    xit("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });
  });

  describe("handlers", function() {
    xit("#handleEditStudentNoteSelected", function() {
      subject.render();
      sinon.spy(subject.article, "render");
      subject.handleEditStudentNoteSelected(new App.Views.EditStudentNote({model: new App.Models.Note}));
      expect(subject.article.render).to.have.been.called;
    });
  });

  describe("helpers", function() {
    xit("#makeInactive", function() {
      
    });

    xit("makeActive", function() {
      
    });
  });
});
