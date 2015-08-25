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
    appendFixture("div", { class: "js-stageStimulus stage__stimulus__gallery" });
    subject = new App.Views.StageStimulusLetters({el: '.js-stageStimulus'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("#render", function() {
    subject.render({value: "B"});
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleSkillChangeRequest", function() {
    sinon.spy(subject, "render");
    var value = {value: "B"};
    subject.handleSkillChangeRequest(value);
    expect(subject.render).to.have.been.calledWith(value);
  });
});
