describe('App.Views.Tile', function() {
  var subject;
  var xhr;
  var requests;
  var model;
  var collection;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    sinon.stub(_, "bindAll");
    appendFixture("div", { class: "js-tile" });

    collection = new App.Collections.Stimuli({localStorageName: "stimuli"});
    App.stimuli.create({reading_stage: 0, skill:App.Config.skill.letterNames, value: "a", assessment:"clear"});
    model = collection.at(0);
    subject = new App.Views.Tile({model: model, el: '.js-tile', index: 0, selectedClass: ""});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles the click event", function() {
      expect(subject.events.click).to.equal('handleClick');
    });
  });

  it("calls listen on initialize", function() {
    sinon.spy(subject, "listen");
    subject.initialize({model: model, el: '.js-tile', index: 0});
    expect(subject.listen).to.have.been.called;
  });

  describe("#listen", function() {
    it("listens to stimulus change requested letter names", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letterNames, subject.handleStimulusChangeRequested);
    });

    it("listens to stimulus change requested letterSounds", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letterSounds, subject.handleStimulusChangeRequested);
    });

    it("listens to stimulus change requested sight words", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.sightWords, subject.handleStimulusChangeRequested);
    });

    it("listens to stimulus change requested onset rimes", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.onsetRimes, subject.handleStimulusChangeRequested);
    });

    it("listens to stimulus change requested stageStories", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stageStories, subject.handleStimulusChangeRequested);
    });
  });

  describe("#render", function() {
    it("renders when the selected activity is not phrases and the sub_skill is not onsets", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("does not render when the selected activity is phrases and the sub_skill is onsets", function() {
      App.selectedActivity = "phrases";
      subject.model.set({sub_skill: App.Config.skill.onsets});
      subject.render();
      expect(subject.$el).to.be.empty;
    });
  });

  it("#templateJSON", function() {
    expect(subject.templateJSON().index).to.equal(subject.index);
    expect(subject.templateJSON().stimulusValue).to.equal(subject.model.get("value"));
    expect(subject.templateJSON().assessmentClass).to.equal("st-" + subject.model.get("assessment"));
    expect(subject.templateJSON().selected).to.equal(subject.selected);
  });

  describe("#setAssessment", function() {
    it("calls render", function() {
      sinon.spy(subject, "render");
      subject.setAssessment("mastered");
      expect(subject.render).to.have.been.called;
    });

    it("calls set on the model", function() {
      sinon.spy(subject.model, "set");
      subject.setAssessment("mastered");
      expect(subject.model.set).to.have.been.called;
      expect(subject.model.get("assessment")).to.equal("mastered");
    });

    it("calls save on the model", function() {
      sinon.spy(subject.model, "save");
      subject.setAssessment();
      expect(subject.model.save).to.have.been.called;
    });

    // TODO: handle fail on the save

  });

  describe("handlers", function() {
    it("#handleClick", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleClick();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("StimulusChangeRequested:"+subject.model.get("skill"), {model: subject.model, skill: subject.model.get("skill"), value: subject.model.get("value")});
      App.Dispatcher.trigger.restore();
    });

    describe("#handleButtonAssessmentClicked", function() {
      it("calls setAssessment", function() {
        sinon.spy(subject, "setAssessment");
        subject.handleButtonAssessmentClicked("mastered");
        expect(subject.setAssessment).to.have.been.calledWith("mastered");
      });
    });

    describe("#handleStimulusChangeRequested", function() {
      it("listens when stimulus argument equals this.value", function() {
        sinon.spy(subject, "listenTo");
        subject.handleStimulusChangeRequested({value: subject.model.get("value")});
        expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "buttonAssessmentClicked", subject.handleButtonAssessmentClicked);
      });

      it("stops listening when stimulus argument does not equal this.value", function() {
        sinon.spy(subject, "stopListening");
        subject.handleStimulusChangeRequested({value: "b"});
        expect(subject.stopListening).to.have.been.calledWith(App.Dispatcher, "buttonAssessmentClicked");
      });
    });
  });
});
