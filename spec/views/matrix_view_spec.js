describe('App.Views.Matrix', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-matrix" });
    subject = new App.Views.Matrix({el: '.js-matrix'});
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

    it("creates a matrix menu view", function() {
      expect(subject.matrixMenuView).not.to.be.undefined;
    });

    it("creates a stimuli tiles view", function() {
      expect(subject.stimuliTilesView).not.to.be.undefined;
    });

    it("creates a student selector view", function() {
      expect(subject.matrixStudentSelectorView).not.to.be.undefined;
    });

  });

  it("renders", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });
});
