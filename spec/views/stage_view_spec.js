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
    App.selectedStudent.set({ reading_stage: 2, displayedReadingStage: 2 });
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

    it("creates a stage stimulus letter view", function() {
      expect(subject.stageViews.letters).to.be.an.instanceOf(App.Views.StageStimulusLetters);
    });

    it("creates a stage stimulus sight words words view", function() {
      expect(subject.stageViews.sightWordsWords).to.be.an.instanceOf(App.Views.StageStimulusSightWordsWords);
    });

    it("creates a stage stimulus words view", function() {
      expect(subject.stageViews.onsetRimesWords).to.be.an.instanceOf(App.Views.StageStimulusOnsetRimesWords);
    });

    it("creates a stage stimulus phrases view", function() {
      expect(subject.stageViews.phrases).to.be.an.instanceOf(App.Views.StageStimulusPhrases);
    });

    it("creates a stage story page view", function() {
      expect(subject.stageStoryPageView).to.be.an.instanceOf(App.Views.StageStoryPage);
    });

    it("creates a leveled text page view", function() {
      expect(subject.leveledTextPageView).to.be.an.instanceOf(App.Views.LeveledTextPage);
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
    describe("#handleRestoreStage", function() {
      it("calls setFlippedClass", function() {
        sinon.spy(subject, "setFlippedClass");
        subject.handleRestoreStage();
        expect(subject.setFlippedClass).to.have.been.called;
      });

      it("calls handleOpenMatrix", function() {
        sinon.spy(subject, "handleOpenMatrix");
        subject.handleRestoreStage();
        expect(subject.handleOpenMatrix).to.have.been.called;
      });

      xit("hides buttonMatrixOpenView", function() {
        subject.buttonMatrixOpenView.render();
        expect($(".icon-matrix-open")).to.exist;
        subject.handleRestoreStage();
        expect($(".icon-matrix-open")).not.to.be.visible;
      });

      it("calls handleDisplayMenuAssessment", function() {
        sinon.spy(subject, "handleDisplayMenuAssessment");
        subject.handleRestoreStage();
        expect(subject.handleDisplayMenuAssessment).to.have.been.calledWith(true);
      });
    });

    describe("#handleDisplayOpenMatrixButton", function() {
      xit("shows the button when display state is true", function() {

      });
    });

    describe("#handleDisplayMenuAssessment", function() {
      xit("shows the menu when display state is true", function() {

      });
    });

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

      it("calls setFlipped on the whiteboard", function() {
        sinon.spy(subject.stageViews.whiteboard, "setFlipped");
        subject.handleFlipStageRequest();
        expect(subject.stageViews.whiteboard.setFlipped).to.have.been.calledWith(subject.flipped);
      });
    });

    describe("#setFlippedClass", function() {
      it("sets the st-flipped class when subject.flipped is true", function() {
        subject.flipped=true;
        subject.setFlippedClass();
        expect($(subject.stageStimulusEl)).to.have.class("st-flipped");
        expect($(subject.stageStimulusEl)).not.to.have.class("st-unflipped");
      });

      it("sets the st-unflipped class when subject.flipped is false", function() {
        subject.flipped=false;
        subject.setFlippedClass();
        expect($(subject.stageStimulusEl)).to.have.class("st-unflipped");
        expect($(subject.stageStimulusEl)).not.to.have.class("st-flipped");
      });
    });

    describe("#handleOnsetRimesChangeRequest", function() {
      var model;

      beforeEach(function() {
        model = new App.Models.Stimulus({ value: "bl", sub_skill: "onsets", reading_stage: 5, displayedReadingStage: 5 });
      });

      it("handles selectedActivity === words", function() {
        App.selectedActivity = "words";
        sinon.spy(subject.stageViews.onsetRimesWords, "render");
        subject.handleOnsetRimesChangeRequest({value: "b"});
        expect(subject.stageViews.onsetRimesWords.render).to.have.been.calledWith({value: "b"});
      });

      it("handles selectedActivity === phrases", function() {
        App.selectedActivity = "phrases";
        sinon.spy(subject.stageViews.phrases, "handleSkillChangeRequest");
        subject.handleOnsetRimesChangeRequest({model: model});
        expect(subject.stageViews.phrases.handleSkillChangeRequest).to.have.been.calledWith({model: model});
      });

      it("handles selectedActivity === tiles", function() {
        App.selectedActivity = "tiles";
        sinon.spy(subject.stageViews.tiles, "handleSkillChangeRequest");
        subject.handleOnsetRimesChangeRequest({model: model});
        expect(subject.stageViews.tiles.handleSkillChangeRequest).to.have.been.calledWith({model: model});
      });
    });

    describe("#handleSightWordsChangeRequest", function() {
      it("handles selectedActivity === words", function() {
        App.selectedActivity = "words";
        sinon.spy(subject.stageViews.sightWordsWords, "render");
        subject.handleSightWordsChangeRequest({value: "b"});
        expect(subject.stageViews.sightWordsWords.render).to.have.been.calledWith({value: "b"});
      });
    });

    describe("#handleLetterSoundsChangeRequest", function() {
      it("handles selectedActivity === words", function() {
        App.selectedActivity = "words";
        sinon.spy(subject.stageViews.onsetRimesWords, "render");
        subject.handleLetterSoundsChangeRequest({value: "b"});
        expect(subject.stageViews.onsetRimesWords.render).to.have.been.calledWith({value: "b"});
      });

      it("handles selectedActivity === letters", function() {
        App.selectedActivity = "letters";
        sinon.spy(subject.stageViews.letters, "render");
        subject.handleLetterSoundsChangeRequest({value: "b", img: "b"});
        expect(subject.stageViews.letters.render).to.have.been.calledWith({value: "b", img: "b"});
      });
    });

    it("handleStageClearRequest", function() {
      subject.handleStageClearRequest();
      expect($(subject.stageStimulusEl)).to.be.empty;
      expect(App.selectedStimulus).to.equal(null);
    });
  });
});
