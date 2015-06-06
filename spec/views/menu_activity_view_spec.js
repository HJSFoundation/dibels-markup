describe('App.Views.MenuActivity', function() {
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
    appendFixture("div", { class: "js-menuActivity" });
    subject = new App.Views.MenuActivity({el: '.js-menuActivity'});
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

    it("creates a button phrases view", function() {
      expect(subject.buttons.phrases).to.be.an.instanceOf(App.Views.ButtonPhrases);
    });

    it("creates a button tiles view", function() {
      expect(subject.buttons.tiles).to.be.an.instanceOf(App.Views.ButtonTiles);
    });

    it("creates a button words view", function() {
      expect(subject.buttons.words).to.be.an.instanceOf(App.Views.ButtonWords);
    });

    it("creates a button letters view", function() {
      expect(subject.buttons.letters).to.be.an.instanceOf(App.Views.ButtonLetters);
    });
  });

  describe("#listen", function() {
    it("listens for the matrixMenuTabActiveRequest", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixMenuTabActiveRequest", subject.handleSkillChangeRequest);
    });

    it("listens to the activityMenuButtonActiveRequest", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "activityMenuButtonActiveRequest", subject.handleActivityMenuButtonActiveRequest);
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {
    describe("#handleSkillChangeRequest", function() {
      it("calls handleActivityMenuButtonActiveRequest with the default activity", function() {
        App.selectedActivity = "phrases";
        sinon.spy(subject, "handleActivityMenuButtonActiveRequest");
        subject.handleSkillChangeRequest({key: App.Config.skill.letterNames});
        expect(subject.buttons.letters.$el).to.be.visible;
        expect(subject.buttons.tiles.$el).not.to.be.visible;
        expect(subject.handleActivityMenuButtonActiveRequest).to.have.been.calledWith(subject.config.buttonMap[App.Config.skill.letterNames][0]);
      });

      it("#handleSkillChangeRequest", function() {
        App.selectedActivity = "letters";
        sinon.spy(subject, "handleActivityMenuButtonActiveRequest");
        subject.handleSkillChangeRequest({key: App.Config.skill.letterNames});
        expect(subject.buttons.letters.$el).to.be.visible;
        expect(subject.buttons.tiles.$el).not.to.be.visible;
        expect(subject.handleActivityMenuButtonActiveRequest).to.have.been.calledWith(App.selectedActivity);
      });
    });

    describe("#handleActivityMenuButtonActiveRequest", function() {
      it("makes active the selected activity", function() {
        sinon.spy(subject.buttons.phrases, "makeActive");
        subject.handleActivityMenuButtonActiveRequest("phrases");
        expect(subject.buttons.phrases.makeActive).to.have.been.called;
      });

      it("makes inactive unselected activities", function() {
        sinon.spy(subject.buttons.tiles, "makeInactive");
        subject.handleActivityMenuButtonActiveRequest("phrases");
        expect(subject.buttons.tiles.makeInactive).to.have.been.called;
      });

      it("triggers stimulus change request when selected stimulus is not null", function() {
        App.selectedStimulus = new App.Models.Stimulus({skill: "letter_sounds", value: "b"});
        sinon.spy(App.Dispatcher, "trigger");
        var skill = App.selectedStimulus.get("skill");
        var value = App.selectedStimulus.get("value");

        subject.handleActivityMenuButtonActiveRequest("words");

        expect(App.Dispatcher.trigger).to.have.been.calledWith("StimulusChangeRequested:" + skill, {model: App.selectedStimulus, skill:skill, value: value});
        App.Dispatcher.trigger.restore();
      });

      it("does not trigger a stimulus change request when selected stimulus is null", function() {
        App.selectedStimulus = null;
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleActivityMenuButtonActiveRequest("words");
        expect(App.Dispatcher.trigger).not.to.have.been.called;
        App.Dispatcher.trigger.restore();
      });

      it("does not trigger a stimulus change request when selected stimulus is not null and no activity active", function() {
        App.selectedStimulus = new App.Models.Stimulus({skill: "leveled_texts", value: "a"});
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleActivityMenuButtonActiveRequest("leveled_texts");
        expect(App.Dispatcher.trigger).not.to.have.been.called;
        App.Dispatcher.trigger.restore();
      });
    });
  });
});
