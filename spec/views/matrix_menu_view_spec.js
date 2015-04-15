describe('App.Views.MatrixMenu', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-matrixMenu" });
    subject = new App.Views.MatrixMenu({el: '.js-matrixMenu'});
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

    it("creates a letters tab view", function() {
      expect(subject.Letters).not.to.be.undefined;
    });

    it("creates a sight words tab view", function() {
      expect(subject.SightWords).not.to.be.undefined;
    });

    it("creates a  onset rimes tab view", function() {
      expect(subject.OnsetRime).not.to.be.undefined;
    });

    it("creates a affixes tab view", function() {
      expect(subject.Affixes).not.to.be.undefined;
    });

    it("creates a stories tab view", function() {
      expect(subject.Stories).not.to.be.undefined;
    });

    it("creates a close tab view", function() {
      expect(subject.closeTab).not.to.be.undefined;
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("helper functions", function() {
    it("#listen", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixMenuTabActiveRequest", subject.handleMatrixMenuTabActveRequest);
    });

    it("#templateJSON", function() {
      expect(subject.templateJSON().jsClass).to.equal(subject.gridClass);
    });
  });

  describe("dispatcher handlers", function() {
    describe("#handleMatrixMenuTabActveRequest", function () {
      beforeEach(function() {
        subject.render();
      });

      it("activates the clicked tab", function() {
        var makeActive = sinon.spy();
        var event_payload = {label: "STORIES", makeActive: makeActive};
        subject.handleMatrixMenuTabActveRequest(event_payload);
        expect(makeActive).to.have.been.called;
      });

      it("inactivates the non clicked tabs", function(){
        var makeActive = sinon.spy();
        var makeInactive = sinon.spy();
        subject.Affixes.makeInactive = makeInactive;
        var event_payload = {label: "STORIES", makeActive: makeActive};
        subject.handleMatrixMenuTabActveRequest(event_payload);
        expect(makeInactive).to.have.been.called;
      });
    });
  });
});
