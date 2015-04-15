describe('App.Views.ButtonMatrixOpen', function() {
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
    appendFixture("div", { class: "js-buttonMatrixOpen" });
    subject = new App.Views.ButtonMatrixOpen({el: '.js-buttonMatrixOpen'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal('handleOpenMatrix');
    });
  });

  describe("#initialize", function() {
    it("calls listen", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {
    it("#handleOpenMatrix", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleOpenMatrix();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("openMatrix");
      App.Dispatcher.trigger.restore();
    });
  });
});
