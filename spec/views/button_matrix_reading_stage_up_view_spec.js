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

  it("#handleReadingStageUpRequest", function() {
    sinon.spy(App.Dispatcher, "trigger");
    subject.handleReadingStageUpRequest();
    expect(App.Dispatcher.trigger).to.have.been.calledWith("readingStageUpRequest");
    App.Dispatcher.trigger.restore();
  });
});
