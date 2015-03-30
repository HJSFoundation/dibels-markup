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

    appendFixture("div", { class: "js-menuActivity" });
    subject = new App.Views.MenuActivity({el: '.js-menuActivity'});
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

    it("creates a button phrases view", function() {
      expect(subject.buttonPhrasesView).not.to.be.undefined;
    });

    it("creates a button tiles view", function() {
      expect(subject.buttonTilesView).not.to.be.undefined;
    });
  });

  it("renders", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });
});
