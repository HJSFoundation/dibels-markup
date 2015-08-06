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
    subject.phrases = ["an array of strings"];
    expect(subject.templateJSON().phrases).to.eql(["an array of strings"]);
  });

  describe("#handleSkillChangeRequest", function() {
    var model;

    beforeEach(function(){
      model = new App.Models.Stimulus({ value: "ome", sub_skill: "rimes", reading_stage: 5});
    });

    it("sets this phrase", function() {
      subject.handleSkillChangeRequest({model: model});
      expect(subject.phrases).to.equal(App.ActivityStimuli.phrasesByStage[5]["rimes"]["ome"]);
    });

    it("#render", function() {
      sinon.spy(subject, "render");
      subject.handleSkillChangeRequest({model: model});
      expect(subject.render).to.have.been.called;
    });
  });
});
