describe('App.Views.StimuliTilesLetterNames', function() {
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
    appendFixture("div", { class: "js-stimuliTiles" });
    subject = new App.Views.StimuliTilesLetterNames({el: '.js-stimuliTiles'});
    App.selectedStudent = new App.Models.Student({id:1, reading_stage:1});

  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
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

  describe("#listen", function() {
    it("listens for the SkillChangeRequested:LetterNames event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.letterNames, subject.handleSkillChangeRequest);
    });

    it("listens for the SkillChangeRequested:LetterSounds event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.letterSounds, subject.handleSkillReplaceRequest);
    });

    it("listens for the SkillChangeRequested:SightWords event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.sightWords, subject.handleSkillReplaceRequest);
    });

    it("listens for the SkillChangeRequested:OnsetRimes event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.onsetRimes, subject.handleSkillReplaceRequest);
    });

    it("listens for the SkillChangeRequested:Affixes event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.affixes, subject.handleSkillReplaceRequest);
    });

    it("listens for the SkillChangeRequested:StageStories event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "SkillChangeRequested:"+App.Config.skill.stageStories, subject.handleSkillReplaceRequest);
    });

    it("listens for the matrixStudentSelectorTabActiveRequest event", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", subject.handleStudentChangeRequest);
    });
  });

  describe("#templateJSON", function() {
    it("returns a jsClass", function() {
      expect(subject.templateJSON().jsClass).to.equal(subject.gridClass);
    });
  });

  describe("handlers", function() {
    it("#handleSkillChangeRequest", function() {
      sinon.spy(subject, "render");
      subject.handleSkillChangeRequest();
      expect(subject.render).to.have.been.called;
    });

    it("#handleSkillReplaceRequest", function() {
      subject.render();
      expect(subject.tiles).not.to.be.empty;
      subject.handleSkillReplaceRequest();
      expect(subject.tiles).to.be.empty;
    });

    it("#handleStudentChangeRequest", function() {
      sinon.spy(subject, "handleSkillReplaceRequest");
      sinon.spy(subject, "render");
      App.selectedSkill = App.Config.skill.letterNames;
      subject.handleStudentChangeRequest();
      expect(subject.handleSkillReplaceRequest).to.have.been.called;
      expect(subject.render).to.have.been.called;
    });
  });
});
