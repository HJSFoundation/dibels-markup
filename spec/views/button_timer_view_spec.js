describe('App.Views.ButtonTimer', function() {
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
    appendFixture("div", { class: "js-buttonTimer" });
    subject = new App.Views.ButtonTimer({el: '.js-buttonTimer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal('handleDisplayTimer');
    });
  });

  it("calls render on initialize", function() {
    sinon.spy(subject, "render");
    subject.initialize();
    expect(subject.render).to.have.been.called;
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {
    it("#handleDisplayTimer", function() {
      var displayTimer = sinon.spy();
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleDisplayTimer();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("displayTimerButtonTapped");
      App.Dispatcher.trigger.restore();
    });
  });
});
