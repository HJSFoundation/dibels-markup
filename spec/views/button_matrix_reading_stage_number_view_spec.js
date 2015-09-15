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

    subject = new App.Views.ButtonMatrixReadingStageNumber({ el: '#applicationContainer' });
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function() {
    App.selectedStudent.set("reading_stage", 2);
    expect(subject.templateJSON().readingStage).to.equal(2);
  });

  describe("handlers", function() {
    xit("#handleReadingStageNumberRequest", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleReadingStageNumberMatrix();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("ReadingStageNumberMatrix");
      App.Dispatcher.trigger.restore();
    });
  });
});
