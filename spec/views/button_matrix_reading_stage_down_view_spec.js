describe('App.Views.ButtonMatrixReadingStageDown', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Views.ButtonMatrixReadingStageDown({ el: '#applicationContainer' });
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events["click .js-buttonMatrixReadingStageDown"]).to.equal('handleReadingStageDownRequest');
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {
    xit("#handleReadingStageDownRequest", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleReadingStageDownMatrix();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("ReadingStageDownMatrix");
      App.Dispatcher.trigger.restore();
    });
  });
});
