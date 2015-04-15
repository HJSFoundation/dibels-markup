describe('App.Views.StimuliTilesStories', function() {
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
    appendFixture("div", { class: "js-stimuliTiles" });
    subject = new App.Views.StimuliTilesStories({el: '.js-stimuliTiles'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
    it("calls listen on initialize", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "SkillChangeRequested:Stories", subject.handleSkillChangeRequest);
  });

  it("#handleSkillChangeRequest", function() {
    sinon.spy(subject, "render");
    subject.handleSkillChangeRequest();
    expect(subject.render).to.have.been.called;
  });

  describe("#templateJSON", function() {
    it("returns a jsClass", function() {
      expect(subject.templateJSON().jsClass).to.equal(subject.gridClass);
    });
  });

});
