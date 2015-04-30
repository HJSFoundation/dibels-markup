describe('App.Views.MatrixStudentSelector', function() {
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
    appendFixture("div", { class: "js-matrixStudentSelector" });
    subject = new App.Views.MatrixStudentSelector({el: '.js-matrixStudentSelector'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
    it("calls render", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("calls listen", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a tab view", function() {
      expect(subject.$el.first()).not.to.be.undefined;
    });
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", subject.handleMatrixStudentSelectorTabActiveRequest);
  });

  describe("dispatcher handlers", function() {
    describe("#handleMatrixStudentSelectorTabActiveRequest", function() {
      beforeEach(function() {
        subject.render();
      });

      it("activates the clicked tab", function() {
        var makeActive = sinon.spy();
        var event_payload = {id: 3, makeActive: makeActive};
        subject.handleMatrixStudentSelectorTabActiveRequest(event_payload);
        expect(makeActive).to.have.been.called;
      });

      it("inactivates the non clicked tabs", function() {
        var makeActive = sinon.spy();
        var makeInactive = sinon.spy();
        subject.tabs[4].makeInactive = makeInactive;
        var event_payload = {id: 3, makeActive: makeActive};
        subject.handleMatrixStudentSelectorTabActiveRequest(event_payload);
        expect(makeInactive).to.have.been.called;
      });
    });
  });
});
