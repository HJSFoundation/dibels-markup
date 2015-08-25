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
    App.selectedStudent = new App.Models.Student({id:1, first_name:"jobe", last_name: "C", reading_stage:1});
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
      expect(subject.tiles.letter_names).to.be.an.instanceOf(App.Views.StimuliTilesLetterNames);
    });

    it("creates a stimuli tiles view letter sounds", function() {
      expect(subject.tiles.letter_sounds).to.be.an.instanceOf(App.Views.StimuliTilesLetterSounds);
    });

    it("creates a stimuli tiles view sight words", function() {
      expect(subject.tiles.sight_words).to.be.an.instanceOf(App.Views.StimuliTilesSightWords);
    });

    it("creates a stimuli tiles view onset rimes", function() {
      expect(subject.tiles.onset_rimes).to.be.an.instanceOf(App.Views.StimuliTilesOnsetRimes);
    });

    // it("creates a stimuli tiles view cvts", function() {
    //   expect(subject.tiles.cvts).to.be.an.instanceOf(App.Views.StimuliTilesCVts);
    // });

    it("creates a stimuli tiles view stage stories", function() {
      expect(subject.tiles.stage_stories).to.be.an.instanceOf(App.Views.StimuliTilesStageStories);
    });

    it("creates a stimuli tiles view leveled texts", function() {
      expect(subject.tiles.leveled_texts).to.be.an.instanceOf(App.Views.StimuliTilesLeveledTexts);
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

  describe("#listen", function() {
    it("listens for matrixStudentSelectorTabActiveRequest", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", subject.handleStudentChangeRequest);
    });
    it("listens for matrixRerenderRequest", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixRerenderRequest", subject.handleRerenderRequest);
    });
  });

  it("#handleStudentChangeRequest", function() {
    App.selectedSkill = App.Config.skill.onsetRimes;
    sinon.spy(subject.tiles[App.selectedSkill], "handleSkillReplaceRequest");
    sinon.spy(subject.tiles[App.selectedSkill], "render");
    var previous = new App.Models.Student({id:1, first_name:"jobe", last_name: "C", reading_stage:1});

    subject.handleStudentChangeRequest({current: App.selectedStudent, previous: previous});
    expect(subject.tiles[App.selectedSkill].handleSkillReplaceRequest).to.have.been.called;
    expect(subject.tiles[App.selectedSkill].render).to.have.been.called;
  });
});
