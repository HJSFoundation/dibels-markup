describe('App.Views.MatrixMenuTab', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    var options = {
      tagName: "a",
      className:  "menu--tab grid-cell",
      label: "STORIES",
      status: ""
    };

    appendFixture("div", { class: options.className });
    subject = new App.Views.MatrixMenuTab(options);
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function() {
    expect(subject.templateJSON().label).to.equal(subject.label);
    expect(subject.templateJSON().status).to.equal(subject.status);
  });

  describe('helper functions', function() {
    it("#makeActive", function() {
      subject.render();
      subject.makeActive();
      expect(subject.el.firstChild.className).to.contain("st-active");
    });

    it("#makeInactive", function() {
      subject.render();
      subject.makeActive();
      expect(subject.el.firstChild.className).to.contain("st-active");
      subject.makeInactive();
      expect(subject.el.firstChild.className).not.to.contain("st-active");
    });
  });

  describe("handlers", function() {
    it("#handleClick", function() {
      var matrixMenuTabActiveRequest = sinon.spy();
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleClick();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("matrixMenuTabActiveRequest");
      App.Dispatcher.trigger.restore();
    });
  });
});
