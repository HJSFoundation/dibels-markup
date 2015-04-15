describe('App.Views.ButtonFlip', function() {
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
    appendFixture("div", { class: "js-stageButtonFlip" });
    subject = new App.Views.ButtonFlip({el: '.js-stageButtonFlip'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal('handleflipScreen');
    });
  });

  it("calls render on initialize", function() {
    sinon.spy(subject, "render");
    subject.initialize();
    expect(subject.render).to.have.been.called;
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {
    it("#handleflip", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleflipScreen();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("flipScreenButtonTapped");
      App.Dispatcher.trigger.restore();
    });
  });
});
