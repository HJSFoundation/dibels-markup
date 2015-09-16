describe('App.Views.ButtonMatrixReadingStageUp', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Views.ButtonMatrixReadingStageUp({ el: '#applicationContainer' });
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events["click .js-buttonMatrixReadingStageUp"]).to.equal('handleReadingStageUpRequest');
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {
    xit("#handleReadingStageUpRequest", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleReadingStageUpMatrix();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("ReadingStageUpMatrix");
      App.Dispatcher.trigger.restore();
    });
  });
});
