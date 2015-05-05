describe('App.Views.ButtonMastered', function() {
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
    appendFixture("div", { class: "js-buttonMastered" });
    subject = new App.Views.ButtonMastered({el: '.js-buttonMastered'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles the click event", function() {
      expect(subject.events.click).to.equal('handleClick');
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

  describe("helper functions", function() {
    it("#makeActive", function() {
      sinon.spy(subject, "render");
      subject.makeActive();
      expect(subject.render).to.have.been.called;
      expect(subject.selectedClass).to.equal("st-selected");
    });

    it("#makeInactive", function() {
      sinon.spy(subject, "render");
      subject.makeInactive();
      expect(subject.render).to.have.been.called;
      expect(subject.selectedClass).to.equal("");
    });

    it("#templateJSON", function() {
      subject.makeActive();
      expect(subject.templateJSON().selectedClass).to.equal("st-selected");
    });
  });

  it("#handleClick", function() {
    sinon.spy(App.Dispatcher, "trigger");
    subject.handleClick();
    expect(App.Dispatcher.trigger).to.have.been.calledWith("buttonAssessmentClicked","mastered");
    App.Dispatcher.trigger.restore();
  });
});
