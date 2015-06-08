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
    subject = new App.Views.MatrixMenu({el: '.js-matrixMenu'});
    App.selectedStudent = new App.Models.Student({reading_stage:1});
    var studentReadingStage = App.selectedStudent.get("reading_stage");
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

    it("creates all required tab views for reading_stage", function() {
      for (var stage = 0; stage < App.Config.maxStageCount; stage += 1) {
        var stageKey = String.fromCharCode(("1".charCodeAt(0)) + stage);
        subject = new App.Views.MatrixMenu({ el: '.js-matrixMenu' });
        App.selectedStudent = new App.Models.Student({ reading_stage:stageKey });
        var studentReadingStage = App.selectedStudent.get("reading_stage");
        subject.activeTabDefs = subject.tabsByStage[studentReadingStage];
        subject.render();

        var skills = subject.tabsByStage[stageKey];

        _.each(skills, function(skill) {
          expect(subject.tabViews[skill.key]).not.to.be.undefined;
        });
      }
    });

    it("creates only required tab views for reading_stage", function() {
      for (var stage = 0; stage < App.Config.maxStageCount; stage += 1) {
        var stageKey = String.fromCharCode(("1".charCodeAt(0)) + stage);
        subject = new App.Views.MatrixMenu({ el: '.js-matrixMenu' });
        App.selectedStudent = new App.Models.Student({ reading_stage:stageKey });
        var studentReadingStage = App.selectedStudent.get("reading_stage");
        subject.activeTabDefs = subject.tabsByStage[studentReadingStage];
        subject.render();

        var skills = subject.tabsByStage[stageKey];

        _.each(subject.tabViews, function(tabView, key){
          this.key = key;
          var skillKey = _.find(skills, function(skill){
            return skill.key === this.key;
          }, this);
          expect(skillKey).not.to.be.undefined;
        });
      }
    });

    it("creates a leveled texts tab view", function() {
      subject.render();
      expect(subject.tabViews[App.Config.skill.leveledTexts]).not.to.be.undefined;
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

      it("clears stage", function() {
        var makeActive = sinon.spy();
        sinon.spy(App.Dispatcher, "trigger");
        var event_payload = {label: "LETTER NAMES", makeActive: makeActive};
        subject.handleMatrixMenuTabActiveRequest(event_payload);
        expect(App.Dispatcher.trigger).to.have.been.calledWith("StageClearRequested");
        App.Dispatcher.trigger.restore();
      });

      it("inactivates the non clicked tabs", function() {
        var makeActive = sinon.spy();
        var makeInactive = sinon.spy();
        subject.tabViews[App.Config.skill.leveledTexts].makeInactive = makeInactive;
        var event_payload = {label: "LETTER NAMES", makeActive: makeActive};
        subject.handleMatrixMenuTabActiveRequest(event_payload);
        expect(makeInactive).to.have.been.called;
      });

      it("sets selectedStimulus to null", function() {
        App.selectedStimulus = "a";
        subject.handleMatrixStudentSelectorTabActiveRequest();
        expect(App.selectedStimulus).to.equal(null);
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
