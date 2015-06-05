describe('App.Views.StageStimulusTiles', function() {
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
    subject = new App.Views.StageStimulusTiles({el: '#applicationContainer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events["click li.tile-choice"]).to.equal('handleTileChoiceClick');
    });
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    xit("calls $scrollTop", function() {
      sinon.spy($, "scrollTop");
      subject.render();
      expect($.scrollTop).to.have.been.calledWith(subject.scrollPos);
    });
  });

  describe("#templateJSON", function() {
    it("sets the subSkillClass", function() {
      subject.subSkillClass = "stage__stimulus--tiles--reverse";
      expect(subject.templateJSON().subSkillClass).to.eq("stage__stimulus--tiles--reverse");
    });

    it("sets choices", function() {
      subject.choices = ["ad", "at"];
      expect(subject.templateJSON().choices).to.eq(subject.choices);
    });

    it("set the onset", function() {
      subject.onset = "b";
      expect(subject.templateJSON().onset).to.eq(subject.onset);
    });

    it("sets the rime", function() {
      subject.rime = "ad";
      expect(subject.templateJSON().rime).to.eq(subject.rime);
    });
  });

  describe("handlers", function() {
    describe("#handleSkillChangeRequest", function() {
      it("calls initializeOnsets when the subskill is onsets", function() {
        var stimulus_onset_object = { model: new App.Models.Stimulus({value: "bl", sub_skill: "onsets", reading_stage: 5}) };
        sinon.spy(subject, "initializeOnsets");
        subject.handleSkillChangeRequest(stimulus_onset_object);
        expect(subject.initializeOnsets).to.have.been.calledWith(stimulus_onset_object.model);
      });

      it("calls initializeRimes when the subskill is rimes", function() {
        var stimulus_rime_object = { model: new App.Models.Stimulus({value: "ape", sub_skill: "rimes", reading_stage: 5}) };
        sinon.spy(subject, "initializeRimes");
        subject.handleSkillChangeRequest(stimulus_rime_object);
        expect(subject.initializeRimes).to.have.been.calledWith(stimulus_rime_object.model);
      });

      it("sets scrollPos to 0", function() {
        subject.scrollPos = 5;
        var stimulus_onset_object = { model: new App.Models.Stimulus({value: "bl", sub_skill: "onsets", reading_stage: 5}) };
        subject.handleSkillChangeRequest(stimulus_onset_object);
        expect(subject.scrollPos).to.eq(0);
      });

      it("calls render", function() {
        var stimulus_onset_object = { model: new App.Models.Stimulus({value: "bl", sub_skill: "onsets", reading_stage: 5}) };
        sinon.spy(subject, "render");
        subject.handleSkillChangeRequest(stimulus_onset_object);
        expect(subject.render).to.have.been.called;
      });
    });

    describe("#handleTileChoiceClick", function() {
      it("sets scrollPos", function() {
        appendFixture("ul", {class: "js-list"});
        var tileChoiceEvent = {currentTarget:{innerText: "ad"}};
        subject.handleTileChoiceClick(tileChoiceEvent);
        expect(subject.scrollPos).to.eq($("ul.js-list").scrollTop());
      });

      it("sets the rime text when it is an onset view", function() {
        var tileChoiceEvent = {currentTarget:{innerText: "ad"}};
        subject.subSkillClass = "";
        subject.handleTileChoiceClick(tileChoiceEvent);
        expect(subject.rime).to.eq("ad");
      });

      it("sets the onset text when it is a rime view", function() {
        var tileChoiceEvent = {currentTarget:{innerText: "d"}};
        subject.subSkillClass = "stage__stimulus--tiles--reverse";
        subject.handleTileChoiceClick(tileChoiceEvent);
        expect(subject.onset).to.eq("d");
      });

      it("calls render", function() {
        sinon.spy(subject, "render");
        var tileChoiceEvent = {currentTarget:{innerText: "d"}};
        subject.handleTileChoiceClick(tileChoiceEvent);
        expect(subject.render).to.have.been.called;
      });
    });
  });

  describe("helper functions", function() {
    describe("#initializeOnsets", function() {
      beforeEach(function() {
        var model = new App.Models.Stimulus({ value: "bl", reading_stage: 5});
        subject.initializeOnsets(model);
      });

      it("sets the subSkillClass", function() {
        expect(subject.subSkillClass).to.equal("");
      });

      it("sets the onset", function() {
        expect(subject.onset).to.equal("bl");
      });

      it("sets the rime choices", function() {
        expect(subject.choices).to.eql(["ade","ame","ed","ot"]);
      });
    });

    describe("#initializeRimes", function() {
      beforeEach(function() {
        var model = new App.Models.Stimulus({ value: "ome", reading_stage: 5});
        subject.initializeRimes(model);
      });

      it("sets the subSkillClass", function() {
        expect(subject.subSkillClass).to.equal("stage__stimulus--tiles--reverse");
      });

      it("sets the rime", function() {
        expect(subject.rime).to.equal("ome");
      });

      it("sets the onset choices", function() {
        expect(subject.choices).to.eql(["d","h"]);
      });
    });
  });

  describe("#isOnsetView", function() {
    it("returns true when subskillClass is empty", function() {
      subject.subSkillClass = "";
      expect(subject.isOnsetView()).to.equal(true);
    });

    it("returns false when subSkillClass is not empty", function() {
      subject.subSkillClass = "stage__stimulus--tiles--reverse";
      expect(subject.isOnsetView()).to.equal(false);
    });
  });
});
