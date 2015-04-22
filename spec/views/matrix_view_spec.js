describe('App.Views.Matrix', function() {
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
    appendFixture("div", { class: "js-matrix" });
    subject = new App.Views.Matrix({el: '.js-matrix'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
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

    it("creates a matrix menu view", function() {
      expect(subject.matrixMenuView).not.to.be.undefined;
    });

    it("creates a stimuli tiles view letter names", function() {
      expect(subject.stimuliTilesViewLetterNames).to.be.an.instanceOf(App.Views.StimuliTilesLetterNames);
    });

    it("creates a stimuli tiles view letter sounds", function() {
      expect(subject.stimuliTilesViewLetterSounds).to.be.an.instanceOf(App.Views.StimuliTilesLetterSounds);
    });

    it("creates a stimuli tiles view words", function() {
      expect(subject.stimuliTilesViewWords).to.be.an.instanceOf(App.Views.StimuliTilesSightWords);
    });

    it("creates a stimuli tiles view onset rimes", function() {
      expect(subject.stimuliTilesViewOnsetRimes).to.be.an.instanceOf(App.Views.StimuliTilesOnsetRimes);
    });

    it("creates a stimuli tiles view stageStories", function() {
      expect(subject.stimuliTilesViewStageStories).to.be.an.instanceOf(App.Views.StimuliTilesStageStories);
    });

    it("creates a student selector view", function() {
      expect(subject.matrixStudentSelectorView).not.to.be.undefined;
    });

    it("calls listen on initialize", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "closeMatrix", subject.handleCloseMatrix);
  });
});
