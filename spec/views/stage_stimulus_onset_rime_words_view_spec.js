describe('App.Views.StageStimulusOnsetRimeWords', function() {
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
    subject = new App.Views.StageStimulusOnsetRimeWords({el: '.js-stageStimulus'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#listen", function() {
    it("listens to the stimulus change request for cvts", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.cvts, subject.handleSkillChangeRequest);
    });

    it("listens to the stimulus change request for onset rimes", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.onsetRimes, subject.handleSkillChangeRequest);
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleSkillChangeRequest", function() {
    sinon.spy(subject, "render");
    var value = "cool";
    subject.handleSkillChangeRequest(value);
    expect(subject.render).to.have.been.calledWith(value);
  });
});
