describe('App.Views.ButtonEndSession', function() {
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
    appendFixture("div", { class: "js-buttonEndSession" });
    subject = new App.Views.ButtonEndSession({el: '.js-buttonEndSession'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("has a click event", function() {
    expect(subject.events.click).to.equal('handleDisplayEndSession');
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

  it("#handleDisplayEndSession", function() {
    sinon.spy(App.Dispatcher, "trigger");
    subject.handleDisplayEndSession();
    expect(App.Dispatcher.trigger).to.have.been.calledWith("initializeConferenceManagementRequested");
    App.Dispatcher.trigger.restore();
  });
});
