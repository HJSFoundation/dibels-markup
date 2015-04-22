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

    sinon.stub(_, "bindAll");
    appendFixture("div", { class: "js-matrixMenu" });
    subject = new App.Views.MatrixMenu({el: '.js-matrixMenu'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#initialize", function() {
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
  });

  describe("#render", function() {
    it("renders when render is called", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a letter names tab view", function() {
      expect(subject.LetterNames).not.to.be.undefined;
    });

    it("creates a letter sounds tab view", function() {
      expect(subject.LetterSounds).not.to.be.undefined;
    });

    it("creates a sight words tab view", function() {
      expect(subject.SightWords).not.to.be.undefined;
    });

    it("creates a  onset rimes tab view", function() {
      expect(subject.OnsetRimes).not.to.be.undefined;
    });

    it("creates a affixes tab view", function() {
      expect(subject.Affixes).not.to.be.undefined;
    });

    it("creates a stageStories tab view", function() {
      expect(subject.StageStories).not.to.be.undefined;
    });

    it("creates a close tab view", function() {
      expect(subject.closeTab).not.to.be.undefined;
    });
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
    describe("#handleMatrixMenuTabActveRequest", function() {
      beforeEach(function() {
        subject.render();
      });

      it("activates the clicked tab", function() {
        var makeActive = sinon.spy();
        var event_payload = {label: "STAGE STORIES", makeActive: makeActive};
        subject.handleMatrixMenuTabActveRequest(event_payload);
        expect(makeActive).to.have.been.called;
      });

      it("inactivates the non clicked tabs", function() {
        var makeActive = sinon.spy();
        var makeInactive = sinon.spy();
        subject.Affixes.makeInactive = makeInactive;
        var event_payload = {label: "STAGE STORIES", makeActive: makeActive};
        subject.handleMatrixMenuTabActveRequest(event_payload);
        expect(makeInactive).to.have.been.called;
      });
    });
  });
});
