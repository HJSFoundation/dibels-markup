describe('App.Views.StimuliTilesOnsetRime', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-stimuliTiles" });
    subject = new App.Views.StimuliTilesOnsetRime({el: '.js-stimuliTiles'});
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

    it("creates a onset tiles view", function() {
      expect(subject.$el.find(".js-stimuliTileOnset")).not.to.be.undefined;
    });

    it("creates a rime tiles view", function() {
      expect(subject.$el.find(".js-stimuliTileRime")).not.to.be.undefined;
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });
});
