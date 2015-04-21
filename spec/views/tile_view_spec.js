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

    collection = new App.Collections.Stimuli({localStorageName: "stimuliLetters"});
    App.stimuli.create({stage: 0, skill:App.Config.skill.letters, stimulus: "a", assessment:"clear"});
    // model = new App.Models.Stimulus({stimulus: "a", skill: "Letters", stage: 0, assessment: "mastered"});
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
    it("handles the click event", function(){
      expect(subject.events.click).to.equal('handleClick');
    });
  });

  it("calls listen on initialize", function(){
    sinon.spy(subject, "listen");
    subject.initialize({model: model, el: '.js-tile', index: 0});
    expect(subject.listen).to.have.been.called;
  });

  describe("#listen", function() {
    it("listens to stimulus change requested letters", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.letters, subject.handleStimulusChangeRequested);
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
    it("listens to stimulus change requested affixes", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.affixes, subject.handleStimulusChangeRequested);
    });
    it("listens to stimulus change requested stories", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stories, subject.handleStimulusChangeRequested);
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function(){
    expect(subject.templateJSON().index).to.equal(subject.index);
    expect(subject.templateJSON().stimulus).to.equal(subject.model.get("stimulus"));
    expect(subject.templateJSON().assessmentClass).to.equal("st-"+subject.model.get("assessment"));
    expect(subject.templateJSON().selected).to.equal(subject.selected);

  });

  it("#setAssessment", function() {
    sinon.spy(subject, "render");
    subject.setAssessment("mastered");
    expect(subject.render).to.have.been.called;
    expect(subject.model.get("assessment")).to.equal("mastered");
  });

  describe("handlers", function() {
    it("#handleClick", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleClick();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("StimulusChangeRequested:"+subject.model.get("skill"), {skill: subject.model.get("skill"), stimulus: subject.model.get("stimulus")});
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
      it("listens when stimulus argument equals this.stimulus", function () {
        sinon.spy(subject, "listenTo");
        subject.handleStimulusChangeRequested({stimulus: subject.model.get("stimulus")});
        expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "buttonAssessmentClicked", subject.handleButtonAssessmentClicked);
      });

      it("stops listening when stimulus argument does not equal this.stimulus", function () {
        sinon.spy(subject, "stopListening");
        subject.handleStimulusChangeRequested({stimulus: "b"});
        expect(subject.stopListening).to.have.been.calledWith(App.Dispatcher, "buttonAssessmentClicked");
      });      
    });
  });
});
