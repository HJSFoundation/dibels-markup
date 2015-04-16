describe('App.Views.Tile', function() {
  var subject;
  var xhr;
  var requests;
  var model;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    sinon.stub(_, "bindAll");
    appendFixture("div", { class: "js-tile" });
    model = new App.Models.Stimulus({stimulus: "a", skill: "Letters", stage: 0});
    subject = new App.Views.Tile({model: model, el: '.js-tile', index: 0});
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

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function(){
    expect(subject.templateJSON().index).to.equal(subject.index);
    expect(subject.templateJSON().stimulus).to.equal(subject.model.get("stimulus"));
  });

  describe("handlers", function() {
    it("#handleClick", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleClick();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("StimulusChangeRequested:"+subject.model.get("skill"), {stimulus: subject.model.get("stimulus")});
      App.Dispatcher.trigger.restore();
    });

    describe("#handleButtonAssessmentClicked", function() {
      xit("sets mastered class", function() {
        
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
