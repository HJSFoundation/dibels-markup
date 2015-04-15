describe('App.Views.ButtonMatrixClose', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-buttonMatrixClose" });
    subject = new App.Views.ButtonMatrixClose({el: '.js-buttonMatrixClose'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal('handleCloseMatrix');
    });
  });

  xit("calls render on initialize", function() {
    expect(subject.$el).not.to.be.empty;
  });

  xit("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {

    afterEach(function() {
      App.Dispatcher.trigger.restore();
    });

    it("#handleCloseMatrix", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleCloseMatrix();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("closeMatrix");
    });
  });
});
