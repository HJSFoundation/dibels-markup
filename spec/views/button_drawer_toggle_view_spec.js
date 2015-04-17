describe('App.Views.ButtonDrawerToggle', function() {
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
    appendFixture("div", { class: "js-drawer-toggle" });
    subject = new App.Views.ButtonDrawerToggle({el: '.js-drawer-toggle'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal("handleToggleDrawerRequest");
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
    it("#handleToggleDrawerRequest", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleToggleDrawerRequest();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("toggleDrawerRequest");
      App.Dispatcher.trigger.restore();
    });
  });
});
