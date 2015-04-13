describe('App.Views.StageStimulusWords', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-stageStimulus" });
    subject = new App.Views.StageStimulusWords({el: '.js-stageStimulus'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.sightWords, subject.handleSkillChangeRequest);
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleSkillChangeRequest", function() {
    sinon.spy(subject, "render");
    var stimulus = "cool";
    subject.handleSkillChangeRequest(stimulus);
    expect(subject.render).to.have.been.calledWith(stimulus);
  });

});
