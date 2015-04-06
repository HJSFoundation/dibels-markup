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

    appendFixture("div", { class: "js-matrixMenu" });
    subject = new App.Views.MatrixMenu({el: '.js-matrixMenu'});
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

    it("creates a letters tab view", function() {
      expect(subject.lettersTab).not.to.be.undefined;
    });

    it("creates a sight words tab view", function() {
      expect(subject.sightWordsTab).not.to.be.undefined;
    });

    it("creates a  onset rimes tab view", function() {
      expect(subject.onsetRimesTab).not.to.be.undefined;
    });

    it("creates a affixes tab view", function() {
      expect(subject.affixesTab).not.to.be.undefined;
    });

    it("creates a stories tab view", function() {
      expect(subject.storiesTab).not.to.be.undefined;
    });

    it("creates a toggle tab view", function() {
      expect(subject.toggleTab).not.to.be.undefined;
    });

  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });
});
