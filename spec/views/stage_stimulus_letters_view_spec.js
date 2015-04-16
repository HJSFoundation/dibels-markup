describe('App.Views.StageStimulusLetters', function() {
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
    appendFixture("div", { class: "js-stageStimulus" });
    subject = new App.Views.StageStimulusLetters({el: '.js-stageStimulus'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("calls listen on initialize", function() {
    sinon.spy(subject, "listen");
    subject.initialize();
    expect(subject.listen).to.have.been.called;
  });

  describe("#listen", function() {
    it("listens for the StimulusChangeRequested:Letters", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letters, subject.handleSkillChangeRequest);
    });
  });


  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleSkillChangeRequest", function() {
    sinon.spy(subject, "render");
    var stimulus = "a";
    subject.handleSkillChangeRequest(stimulus);
    expect(subject.render).to.have.been.calledWith(stimulus);
  });
});
