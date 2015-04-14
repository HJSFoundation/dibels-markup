describe('App.Views.Stage', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-stage" });
    subject = new App.Views.Stage({el: '.js-stage'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
    it("calls render on initialize", function() {
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a button drawer toggle view", function() {
      expect(subject.buttonDrawerToggleView).not.to.be.undefined;
    });

    it("creates a drawer view", function() {
      expect(subject.drawerView).not.to.be.undefined;
    });

    it("creates a stage stimulus letters view", function() {
      expect(subject.stageStimulusLettersView).to.be.an.instanceOf(App.Views.StageStimulusLetters);
    });

    it("creates a stage stimulus words view", function() {
      expect(subject.stageStimulusWordsView).to.be.an.instanceOf(App.Views.StageStimulusWords);
    });

    it("creates a stage stimulus phrases view", function() {
      expect(subject.stageStimulusPhrasesView).to.be.an.instanceOf(App.Views.StageStimulusPhrases);
    });

    it("creates a button flip view", function() {
      expect(subject.buttonFlipView).not.to.be.undefined;
    });

    it("creates a button timer view", function() {
      expect(subject.buttonTimerView).not.to.be.undefined;
    });

    it("creates a menu assessment view", function() {
      expect(subject.menuAssessmentView).not.to.be.undefined;
    });

    it("creates a menu activity view", function() {
      expect(subject.menuActivityView).not.to.be.undefined;
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#listen", function (){
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "closeMatrix", subject.handleCloseMatrix);
  });

  it("#handleCloseMatrix", function(){
    subject.handleCloseMatrix();
    expect(subject.$el).to.have.class("animated slideOutDown");
  });

});
