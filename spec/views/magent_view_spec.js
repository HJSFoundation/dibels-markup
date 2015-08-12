describe('App.Views.Magnet', function() {
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
    subject = new App.Views.Magnet({el: '#applicationContainer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("has a click event", function() {
    expect(subject.events["click .js-magnetClose"]).to.equal('handleMagnetClosePressed');
  });

  it("initialize sets this.text to options.text", function() {
    subject.text = "";
    subject.initialize({text: "some text"});
    expect(subject.text).to.equal("some text");
  });

  it("renders the template", function() {
    subject.render();
    expect(subject.$el.html()).not.to.be.empty;
  });

  it("#templateJSON", function() {
    subject.text = "input text";
    expect(subject.templateJSON().text).to.equal("input text");
  });

  describe("#handleMagnetClosePressed", function() {
    it("removes itself", function() {
      sinon.spy(subject, "remove");
      subject.handleMagnetClosePressed();
      expect(subject.remove).to.have.been.called;
    });

    it("returns false", function() {
      expect(subject.handleMagnetClosePressed()).to.equal(false);
    });
  });
});
