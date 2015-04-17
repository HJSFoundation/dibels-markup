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

    sinon.stub(_, "bindAll");
    appendFixture("div", { class: "js-menuActivity" });
    subject = new App.Views.MenuActivity({el: '.js-menuActivity'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
    it("calls render on initialize", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("calls listen on initialize", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });

    it("creates a button phrases view", function() {
      expect(subject.buttons.phrases).to.be.an.instanceOf(App.Views.ButtonPhrases);
    });

    it("creates a button tiles view", function() {
      expect(subject.buttons.tiles).to.be.an.instanceOf(App.Views.ButtonTiles);
    });

    it("creates a button words view", function() {
      expect(subject.buttons.words).to.be.an.instanceOf(App.Views.ButtonWords);
    });

    it("creates a button letters view", function() {
      expect(subject.buttons.letters).to.be.an.instanceOf(App.Views.ButtonLetters);
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleSkillChangeRequest", function() {
    subject.handleSkillChangeRequest({key: "Letters"});
    expect(subject.buttons.letters.$el).to.be.visible;
    expect(subject.buttons.tiles.$el).not.to.be.visible;
  });
});
