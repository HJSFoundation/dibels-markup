describe('App.Views.ButtonMatrixToggle', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-buttonMatrixToggle" });
    subject = new App.Views.ButtonMatrixToggle({el: '.js-buttonMatrixToggle'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal('handleToggleMatrix');
    });
  });

  xit("calls render on initialize", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });

  xit("renders", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {

    afterEach(function() {
      App.Dispatcher.trigger.restore();
    });

    it("#handleToggleMatrix", function() {
      var toggleMatrix = sinon.spy();
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleToggleMatrix();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("toggleMatrix");
    });
  });
});
