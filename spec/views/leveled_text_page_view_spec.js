describe('App.Views.LeveledTextPage', function() {
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
    appendFixture("div", { class: "js-storyOverlay" });
    subject = new App.Views.LeveledTextPage({ el: '.js-storyOverlay' });
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#initialize", function() {
    it("calls listen", function() {
      subject.listen = sinon.spy();
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });

    it("fills the stories array", function() {
      expect(subject.stories).not.to.be.empty;
    });
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a story page image flip button view", function() {
      subject.render();
      expect(subject.storyButtonFlipView).to.be.an.instanceOf(App.Views.ButtonFlip);
    });

    it("creates a story page close story button view", function() {
      subject.render();
      expect(subject.storyButtonCloseStoryView).to.be.an.instanceOf(App.Views.ButtonCloseStory);
    });

    it("creates reading strategies when selected student reading stage in range", function() {
      App.selectedStudent.set({ reading_stage: App.Config.minReadingStageForStrategies });
      subject.render();
      expect(subject.readingStrategies).to.be.an.instanceOf(App.Views.ReadingStrategies);
    });

    it("does not create reading strategies when selected student reading stage out of range", function() {
      App.selectedStudent.set({ reading_stage: 0 });
      subject.render();
      expect(subject.readingStrategies).to.be.undefined;
    });
  });

  it("#templateJSON", function() {
    subject.pages = "I am pages";
    expect(subject.templateJSON().pages).to.equal(subject.pages);
  });

  it("#removeView", function() {
    subject.render();
    subject.removeView();
    expect(subject.$el).to.be.empty;
  });

  describe("#listen", function() {
    it("listens for stimulus change request for leveledTexts", function() {
      subject.listenTo = sinon.spy();
      subject.listen();
      expect(subject.listenTo).to.be.calledWith(App.Dispatcher, "StimulusChangeRequested:" + App.Config.skill.leveledTexts, subject.handleStoryChangeRequest);
    });

    it("listens for flip story button tapped", function() {
      subject.listenTo = sinon.spy();
      subject.listen();
      expect(subject.listenTo).to.be.calledWith(App.Dispatcher, "flipStoryButtonTapped", subject.handleFlipStoryRequest);
    });

    it("listens for close story button tapped", function() {
      subject.listenTo = sinon.spy();
      subject.listen();
      expect(subject.listenTo).to.be.calledWith(App.Dispatcher, "CloseStoryPage", subject.handleCloseStoryPage);
    });
  });

  describe("handlers", function() {
    it("#handleStoryChangeRequest", function() {
      App.selectedStudent.set({ reading_stage: App.Config.minReadingStageForStrategies });
      sinon.spy(subject, "render");
      subject.handleStoryChangeRequest({ id: 6670 });
      expect(subject.pages).to.be.instanceof(Array);
      expect(subject.render).to.have.been.called;
    });

    it("#handleCloseStoryPage", function() {
      sinon.spy(subject, "removeView");
      subject.handleCloseStoryPage();
      expect(subject.removeView).to.have.been.called;
    });

    describe("#handleFlipStoryRequest", function() {
      beforeEach(function() {
        appendFixture("div", { class: "js-storyFlip" });
        appendFixture("div", { class: "js-storyTextTeacher" });
      });

      it("handles flip story request from the flipped state", function() {
        subject.flipped = true;
        subject.handleFlipStoryRequest();
        expect(subject.flipped).to.equal(false);
        expect($(subject.storyStimulusEl)).to.have.class("st-unflipped");
        expect($(subject.storyStimulusEl)).not.to.have.class("st-flipped");
        expect($(".js-storyTextTeacher")).to.be.hidden;
      });

      it("handles flip story request from the unflipped state", function() {
        subject.flipped = false;
        subject.handleFlipStoryRequest();
        expect(subject.flipped).to.equal(true);
        expect($(subject.storyStimulusEl)).to.have.class("st-flipped");
        expect($(subject.storyStimulusEl)).not.to.have.class("st-unflipped");
        expect($(".js-storyTextTeacher")).not.to.be.hidden;
      });
    });
  });
});
