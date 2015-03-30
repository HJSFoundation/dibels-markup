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

    it("creates a stage stimulus view", function() {
      expect(subject.stageStimulusView).not.to.be.undefined;
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
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });
});
