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

    appendFixture("div", { class: "js-drawer-toggle" });
    subject = new App.Views.ButtonDrawerToggle({el: '.js-drawer-toggle'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
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
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });

  it("renders", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {

    afterEach(function() {
      App.Dispatcher.trigger.restore();
    });

    it("#handleToggleDrawerRequest", function() {
      var toggleDrawerRequest = sinon.spy();
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleToggleDrawerRequest();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("toggleDrawerRequest");
    });
  });
});
