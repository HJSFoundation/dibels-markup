describe('App.Views.StageStimulusPhrases', function() {
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
    subject = new App.Views.StageStimulusPhrases({el: '.js-stageStimulus'});
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function() {
    subject.phrase = "a string";
    expect(subject.templateJSON().phrase).to.equal("a string");
  });

  describe("#handleSkillChangeRequest", function() {

    beforeEach(function(){
      model = new App.Models.Stimulus({ value: "ome", sub_skill: "rimes", reading_stage: 5});
    });

    it("sets this phrase", function() {
      subject.handleSkillChangeRequest({model: model});
      expect(subject.phrase).to.equal(App.ActivityStimuli.phrasesByStage[5]["rimes"]["ome"]);
    });

    it("#render", function() {
      sinon.spy(subject, "render");
      subject.handleSkillChangeRequest({model: model});
      expect(subject.render).to.have.been.called;
    });
  });
});
