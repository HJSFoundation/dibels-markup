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
      expect(subject.buttonPhrasesView).to.be.an.instanceOf(App.Views.ButtonPhrases);
    });

    it("creates a button tiles view", function() {
      expect(subject.buttonTilesView).to.be.an.instanceOf(App.Views.ButtonTiles);
    });

    it("creates a button words view", function() {
      expect(subject.buttonWordsView).to.be.an.instanceOf(App.Views.ButtonWords);
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
    expect(subject.$el).to.have.class("animated slideOutRight");
  });
});
