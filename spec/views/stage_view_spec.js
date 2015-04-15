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

    it("creates a button drawer toggle view", function() {
      expect(subject.buttonDrawerToggleView).to.be.an.instanceOf(App.Views.ButtonDrawerToggle);
    });

    it("creates a drawer view", function() {
      expect(subject.drawerView).to.be.an.instanceOf(App.Views.Drawer);
    });

    it("creates a stage stimulus letters view", function() {
      expect(subject.stageStimulusLettersView).to.be.an.instanceOf(App.Views.StageStimulusLetters);
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
  });
});
