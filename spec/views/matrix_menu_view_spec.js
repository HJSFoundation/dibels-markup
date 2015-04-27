describe('App.Views.MatrixMenu', function() {
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
    appendFixture("div", { class: "js-matrixMenu" });
    App.Dispatcher = _.clone(Backbone.Events);
    subject = new App.Views.MatrixMenu({el: '.js-matrixMenu'});
    App.selectedStudent = new App.Models.Student({readingStage:1});
    var studentReadingStage = App.selectedStudent.get("readingStage");
    subject.activeTabDefs = subject.tabsByStage[studentReadingStage];

  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("has a tab definitions", function() {
    expect(subject.tabDefs).to.exist;
  });

  describe("#initialize", function() {
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

    it("creates a tab by stage object on initialize", function() {
      subject.initialize();
      expect(subject.tabsByStage).to.exist;
    });
  });

  describe("#render", function() {

    it("renders when render is called", function() {

      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a letter names tab view", function() {
      var skillStages = [
        { number:1, skillsDefined:"LetterNames" },
        { number:2, skillsUndefined:"LetterSounds" }
      ]

      _.each(skillStages, function(skillStage) {
        subject = new App.Views.MatrixMenu({ el: '.js-matrixMenu' });
        App.selectedStudent = new App.Models.Student({ readingStage:skillStage.number });
        var studentReadingStage = App.selectedStudent.get("readingStage");
        subject.activeTabDefs = subject.tabsByStage[studentReadingStage];
        subject.render();

        expect(subject[skillStage.skill]).not.to.be.undefined;
      })
    });

    // it("creates a letter sounds tab view", function() {
    //   expect(subject.LetterSounds).not.to.be.undefined;
    // });

    // it("creates a sight words tab view", function() {
    //   expect(subject.SightWords).not.to.be.undefined;
    // });

    // it("creates a onset rimes tab view", function() {
    //   expect(subject.OnsetRimes).not.to.be.undefined;
    // });

    // it("creates a affixes tab view", function() {
    //   expect(subject.Affixes).not.to.be.undefined;
    // });

    // it("creates a stageStories tab view", function() {
    //   expect(subject.StageStories).not.to.be.undefined;
    // });

    it("creates a leveled texts tab view", function() {
      subject.render();
      expect(subject.LeveledTexts).not.to.be.undefined;
    });

    it("creates a close tab view", function() {
      subject.render();
      expect(subject.closeTab).not.to.be.undefined;
    });
  });

  describe("helper functions", function() {
    describe("#listen", function() {
      it("#listenTo matrixMenuTabActiveRequest", function() {
        sinon.spy(subject, "listenTo");
        subject.listen();
        expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixMenuTabActiveRequest", subject.handleMatrixMenuTabActiveRequest);
      });
      it("#listenTo matrixStudentSelectorTabActiveRequest", function() {
        sinon.spy(subject, "listenTo");
        subject.listen();
        expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", subject.handleMatrixStudentSelectorTabActiveRequest);
      });

    });

    it("#templateJSON", function() {
      expect(subject.templateJSON().jsClass).to.equal(subject.gridClass);
    });

    it("#selectedSkillAvailable", function() {
      App.selectedSkill = App.Config.skill.sightWords; 
      expect(subject.selectedSkillAvailable()).to.be.false; // student is stage 1 so sightWords not available
    });
  });

  describe("dispatcher handlers", function() {
    describe("#handleMatrixMenuTabActiveRequest", function() {
      beforeEach(function() {
        subject.render();
      });

      it("activates the clicked tab", function() {
        var makeActive = sinon.spy();
        var event_payload = {label: "LETTER NAMES", makeActive: makeActive};
        subject.handleMatrixMenuTabActiveRequest(event_payload);
        expect(makeActive).to.have.been.called;
      });

      it("inactivates the non clicked tabs", function() {
        var makeActive = sinon.spy();
        var makeInactive = sinon.spy();
        subject.LeveledTexts.makeInactive = makeInactive;
        var event_payload = {label: "LETTER NAMES", makeActive: makeActive};
        subject.handleMatrixMenuTabActiveRequest(event_payload);
        expect(makeInactive).to.have.been.called;
      });
    });
    describe("#handleMatrixStudentSelectorTabActiveRequest", function() {
      it("sets activeTabDefs", function() {
        subject.render();
        subject.handleMatrixStudentSelectorTabActiveRequest();
        expect(subject.activeTabDefs.length).to.equal(2); // student is stage 1 so active tab count = 2
      });
      it("calls render", function() {
        sinon.spy(subject, "render");
        subject.handleMatrixStudentSelectorTabActiveRequest();
        expect(subject.render).to.have.been.called;
      });
    });
  });
});
