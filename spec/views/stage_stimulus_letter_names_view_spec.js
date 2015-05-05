describe('App.Views.StageStimulusLetterNames', function() {
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
    appendFixture("div", { class: "js-stageStimulus stage__stimulus__gallery" });
    subject = new App.Views.StageStimulusLetterNames({el: '.js-stageStimulus'});
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
    it("listens for the StimulusChangeRequested:LetterNames", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letterNames, subject.handleSkillChangeRequest);
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleSkillChangeRequest", function() {
    sinon.spy(subject, "render");
    var value = "a";
    subject.handleSkillChangeRequest(value);
    expect(subject.render).to.have.been.calledWith(value);
  });
});
