describe('App.Views.ButtonLearning', function() {
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
    appendFixture("div", { class: "js-buttonLearning" });
    subject = new App.Views.ButtonLearning({el: '.js-buttonLearning'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("handles a click event", function() {
    expect(subject.events.click).to.equal("handleClick");
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

  it("#handleClick", function() {
    sinon.spy(App.Dispatcher, "trigger");
    subject.handleClick();
    expect(App.Dispatcher.trigger).to.have.been.calledWith("buttonAssessmentClicked","learning");
    App.Dispatcher.trigger.restore();
  });
});
