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

    appendFixture("div", { class: "js-buttonMatrixOpen" });
    subject = new App.Views.ButtonMatrixOpen({el: '.js-buttonMatrixOpen'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal('handleOpenMatrix');
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {

    afterEach(function() {
      App.Dispatcher.trigger.restore();
    });

    it("#handleOpenMatrix", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleOpenMatrix();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("openMatrix");
    });
  });
});
