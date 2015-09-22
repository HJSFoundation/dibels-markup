describe('App.Views.ButtonMatrixReadingStageNumber', function() {
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

    subject = new App.Views.ButtonMatrixReadingStageNumber({ el: '#applicationContainer' });
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("calls listen", function() {
    sinon.spy(subject, "listen");
    subject.initialize();
    expect(subject.listen).to.have.been.called;
  });

  describe("#listen", function() {
    it("listens to readingStageDownRequest", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "readingStageDownRequest", subject.handleReadingStageDownRequest);
    });

    it("listens to readingStageDownRequest", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "readingStageDownRequest", subject.handleReadingStageDownRequest);
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("#changedStageStateClass", function() {
    it("returns an empty string if the student's reading stage is equal to the displayed reading stage", function() {
      App.selectedStudent.set({ displayedReadingStage: 8, reading_stage: 8 });
      expect(subject.changedStageStateClass()).to.equal("");
    });

    it("returns st-changed-stage if the student's reading stage is not equal to the displayed reading stage", function() {
      App.selectedStudent.set({ displayedReadingStage: 7, reading_stage: 8 });
      expect(subject.changedStageStateClass()).to.equal("st-changed-stage");
    });
  });

  describe("#templateJSON", function() {
    it("returns the readingStage", function() {
      App.selectedStudent.set({ displayedReadingStage: 8 });
      expect(subject.templateJSON().readingStage).to.equal(8);
    });

    it("returns the changed Stage State Class", function() {
      sinon.spy(subject, "changedStageStateClass");
      subject.templateJSON();
      expect(subject.changedStageStateClass).to.have.been.called;
    });
  });

  describe("handlers", function() {
    describe("#handleReadingStageUpRequest", function() {
      it("calls stopListening", function() {
        sinon.spy(subject, "stopListening");
        subject.handleReadingStageUpRequest();
        expect(subject.stopListening).to.have.been.called;
      });

      it("calls set displayed reading stage on the selected student", function() {
        App.selectedStudent.set({displayedReadingStage: 8});
        sinon.spy(App.selectedStudent, "set");
        subject.handleReadingStageUpRequest();
        expect(App.selectedStudent.set).to.have.been.calledWith({displayedReadingStage: 9});
        App.selectedStudent.set.restore();
      });

      it("triggers matrixStudentSelectorTabActiveRequest", function() {
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleReadingStageUpRequest();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("matrixStudentSelectorTabActiveRequest",
          { current: App.selectedStudent,
            previous: App.selectedStudent
          }
        );
        App.Dispatcher.trigger.restore();
      });
    });

    describe("#handleReadingStageDownRequest", function() {
      it("calls stopListening", function() {
        sinon.spy(subject, "stopListening");
        subject.handleReadingStageDownRequest();
        expect(subject.stopListening).to.have.been.called;
      });

      it("calls set displayed reading stage on the selected student", function() {
        App.selectedStudent.set({displayedReadingStage: 8});
        sinon.spy(App.selectedStudent, "set");
        subject.handleReadingStageDownRequest();
        expect(App.selectedStudent.set).to.have.been.calledWith({ displayedReadingStage: 7});
        App.selectedStudent.set.restore();
      });

      it("triggers matrixStudentSelectorTabActiveRequest", function() {
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleReadingStageDownRequest();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("matrixStudentSelectorTabActiveRequest",
          { current: App.selectedStudent,
            previous: App.selectedStudent
          }
        );
        App.Dispatcher.trigger.restore();
      });
    });
  });
});
