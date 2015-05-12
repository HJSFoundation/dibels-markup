describe('App.Views.MenuAssessment', function() {
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
    appendFixture("div", { class: "js-menuAssessment" });
    subject = new App.Views.MenuAssessment({el: '.js-menuAssessment'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
    it("calls render on initialize", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("creates a button mastered view", function() {
      expect(subject.buttons.mastered).to.be.an.instanceOf(App.Views.ButtonMastered);
    });

    it("creates a button learning view", function() {
      expect(subject.buttons.learning).to.be.an.instanceOf(App.Views.ButtonLearning);
    });

    it("creates a button needs work view", function() {
      expect(subject.buttons.needs_work).to.be.an.instanceOf(App.Views.ButtonNeedsWork);
    });

    it("creates a button clear view", function() {
      expect(subject.buttons.clear).to.be.an.instanceOf(App.Views.ButtonClear);
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "buttonAssessmentClicked", subject.handleButtonAssessmentClicked);
  });

  describe("#handleButtonAssessmentClicked", function() {
    it("activates the clicked assessment button", function() {
      subject.buttons.mastered.makeActive = sinon.spy();
      var event_payload = "mastered";
      subject.handleButtonAssessmentClicked(event_payload);
      expect(subject.buttons.mastered.makeActive).to.have.been.called;
    });

    it("inactivates the non clicked aseessment buttons", function() {
      subject.buttons.learning.makeActive = sinon.spy();
      subject.buttons.mastered.makeInactive = sinon.spy();
      var event_payload = "learning";
      subject.handleButtonAssessmentClicked(event_payload);
      expect(subject.buttons.learning.makeActive).to.have.been.called;
      expect(subject.buttons.mastered.makeInactive).to.have.been.called;
    });

    it("does not allow an assessment to be made if there is not a selected stimuli", function() {
      App.selectedStimulus = null;
      subject.buttons.mastered.makeInactive = sinon.spy();
      var event_payload = "mastered";
      subject.handleButtonAssessmentClicked(event_payload);
      expect(subject.buttons.mastered.makeInactive).to.have.been.called;
    });
  });
});
