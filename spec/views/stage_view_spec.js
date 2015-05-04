describe('App.Views.Stage', function() {
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
    appendFixture("div", { class: "js-stage" });
    subject = new App.Views.Stage({el: '.js-stage'});
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

    it("calls listen on initialize", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });

    it("creates a stage stimulus letter names view", function() {
      expect(subject.stageStimulusLetterNamesView).to.be.an.instanceOf(App.Views.StageStimulusLetterNames);
    });

    it("creates a stage stimulus letter sounds view", function() {
      expect(subject.stageStimulusLetterSoundsView).to.be.an.instanceOf(App.Views.StageStimulusLetterSounds);
    });

    it("creates a stage stimulus words view", function() {
      expect(subject.stageStimulusWordsView).to.be.an.instanceOf(App.Views.StageStimulusWords);
    });

    it("creates a stage stimulus phrases view", function() {
      expect(subject.stageStimulusPhrasesView).to.be.an.instanceOf(App.Views.StageStimulusPhrases);
    });

    it("creates a story page view", function() {
      expect(subject.stageStimulusPhrasesView).to.be.an.instanceOf(App.Views.StageStimulusPhrases);
    });

    it("creates a button flip view", function() {
      expect(subject.buttonFlipView).to.be.an.instanceOf(App.Views.ButtonFlip);
    });

    it("creates a button timer view", function() {
      expect(subject.buttonTimerView).to.be.an.instanceOf(App.Views.ButtonTimer);
    });

    it("creates a menu assessment view", function() {
      expect(subject.menuAssessmentView).to.be.an.instanceOf(App.Views.MenuAssessment);
    });

    it("creates a menu activity view", function() {
      expect(subject.menuActivityView).to.be.an.instanceOf(App.Views.MenuActivity);
    });

    it("creates a button matrix open view", function() {
      expect(subject.menuActivityView).to.be.an.instanceOf(App.Views.MenuActivity);
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("#listen", function() {
    it("listens for the close matrix event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "closeMatrix", subject.handleCloseMatrix);
    });

    it("listens for the open matrix event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "openMatrix", subject.handleOpenMatrix);
    });

    it("listens for the flipStageButtonTapped", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "flipStageButtonTapped", subject.handleFlipStageRequest);
    });
  });

  describe("handlers", function() {
    it("#handleCloseMatrix", function() {
      subject.handleCloseMatrix();
      expect(subject.$el).to.have.class("stage--workspace--full");
    });

    it("#handleOpenMatrix", function() {
      subject.handleOpenMatrix();
      expect(subject.$el).not.to.have.class("stage--workspace--full");
    });

    describe("#handleFlipStageRequest", function() {
      beforeEach(function() {
        appendFixture("div", { class: "js-stageStimulus" });
      });

      it("handles flip stage request from the flipped state", function() {
        subject.flipped=true;
        subject.handleFlipStageRequest();
        expect(subject.flipped).to.equal(false);
        expect($(subject.stageStimulusEl)).to.have.class("st-unflipped");
        expect($(subject.stageStimulusEl)).not.to.have.class("st-flipped");
      });

      it("handles flip stage request from the unflipped state", function() {
        subject.flipped=false;
        subject.handleFlipStageRequest();
        expect(subject.flipped).to.equal(true);
        expect($(subject.stageStimulusEl)).to.have.class("st-flipped");
        expect($(subject.stageStimulusEl)).not.to.have.class("st-unflipped");
      });
    });
  });
});
