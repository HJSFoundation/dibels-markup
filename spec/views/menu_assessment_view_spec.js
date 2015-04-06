describe('App.Views.MenuAssessment', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-menuAssessment" });
    subject = new App.Views.MenuAssessment({el: '.js-menuAssessment'});
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

    it("creates a button mastered view", function() {
      expect(subject.buttonMasteredView).not.to.be.undefined;
    });

    it("creates a button learning view", function() {
      expect(subject.buttonLearningView).not.to.be.undefined;
    });

    it("creates a button needs work view", function() {
      expect(subject.buttonNeedsWorkView).not.to.be.undefined;
    });

    it("creates a button clear view", function() {
      expect(subject.buttonClearView).not.to.be.undefined;
    });

  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });
});
