describe('App.Views.Drawer', function() {
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
    appendFixture("div", { class: "js-stageDrawer" });
    subject = new App.Views.Drawer({el: '.js-stageDrawer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("keeps track of its events", function() {
      expect(subject.events["click .js-drawer-toggle"]).to.equal("handleToggleDrawerRequest");
      expect(subject.events["click .js-reading-stage"]).to.equal("handleReadingStageRequest");
      expect(subject.events["click .js-assessments"]).to.equal("handleAssessmentsRequest");
      expect(subject.events["click .js-assignments"]).to.equal("handleAssignmentsRequest");
      expect(subject.events["click .js-whiteboard"]).to.equal("handleWhiteboardRequest");
      expect(subject.events["click .js-leveled-stories"]).to.equal("handleLeveledStoriesRequest");
    });
  });

  describe("#initalize", function() {
    it("calls render on initialize", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("creates an isOpen property", function() {
      expect(subject.isOpen).to.equal(false);
    });

    it("calls listen on initialize", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "toggleDrawerRequest", subject.handleToggleDrawerRequest);
  });

  it("caches a reference to the drawer", function() {
    expect(subject.$drawer).to.exist;
    expect(subject.$drawer).to.have.class("js-drawer");
  });

  describe("helper functions", function() {
    it("#open", function() {
      subject.cacheElements();
      subject.open();
      expect(subject.$drawer).not.to.have.class("st-closed");
      expect(subject.$drawer).to.have.class("st-open");
      expect(subject.isOpen).to.equal(true);
    });

    it("#close", function() {
      subject.cacheElements();
      subject.close();
      expect(subject.$drawer).to.have.class("st-closed");
      expect(subject.$drawer).not.to.have.class("st-open");
      expect(subject.isOpen).not.to.equal(true);
    });
  });

  describe("handlers", function() {
    describe("#toggleDrawerRequest", function() {
      beforeEach(function() {
        sinon.spy(subject, "open");
        sinon.spy(subject, "close");
      });

      it("closes the drawer when open", function() {
        subject.isOpen = true;
        subject.handleToggleDrawerRequest();
        expect(subject.close).to.have.been.called;
        expect(subject.open).not.to.have.been.called;
      });

      it("opens the drawer when closed", function() {
        subject.isOpen = false;
        subject.handleToggleDrawerRequest();
        expect(subject.close).not.to.have.been.called;
        expect(subject.open).to.have.been.called;
      });
    });

    it("#handleReadingStageRequest", function() {
      expect(subject.readingStageView).to.be.undefined;
      subject.handleReadingStageRequest();
      expect(subject.readingStageView).to.be.an.instanceOf(App.Views.ReadingStage);
    });

    it("#handleAssessmentsRequest", function() {
      expect(subject.assessmentView).to.be.undefined;
      subject.handleAssessmentsRequest();
      expect(subject.assessmentView).to.be.an.instanceOf(App.Views.Assessment);
    });

    it("#handleAssignmentsRequest", function() {
      expect(subject.assignmentsView).to.be.undefined;
      subject.handleAssignmentsRequest();
      expect(subject.assignmentsView).to.be.an.instanceOf(App.Views.Assignment);
    });

    it("#handleWhiteboardRequest", function() {
      expect(subject.whiteboardView).to.be.undefined;
      subject.handleWhiteboardRequest();
      expect(subject.whiteboardView).to.be.an.instanceOf(App.Views.Whiteboard);
    });

    it("#handleLeveledStoriesRequest", function() {
      expect(subject.leveledStoriesView).to.be.undefined;
      subject.handleLeveledStoriesRequest();
      expect(subject.leveledStoriesView).to.be.an.instanceOf(App.Views.LeveledStories);
    });
  });
});
