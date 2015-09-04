describe('App.Views.ButtonTimer', function() {
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
    appendFixture("div", { class: "js-buttonTimer" });
    subject = new App.Views.ButtonTimer({ el: '.js-buttonTimer' });
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events["click .js-buttonTimer"]).to.equal('handleDisplayTimer');
    });
  });

  it("calls render on initialize", function() {
    sinon.spy(subject, "render");
    subject.initialize();
    expect(subject.render).to.have.been.called;
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("#templateJSON", function() {
    it("sets the filledClass", function() {
      expect(subject.templateJSON().filledClass).to.equal("st-hidden");
    });

    it("sets the unfilledClass", function() {
      expect(subject.templateJSON().unfilledClass).to.equal("");
    });
  });

  describe("handlers", function() {
    describe("#handleDisplayTimer", function() {
      it("triggers toggleTimerRequested", function() {
        var displayTimer = sinon.spy();
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleDisplayTimer();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("toggleTimerRequested");
        App.Dispatcher.trigger.restore();
      });

      it("sets the buttonActive state", function() {
        subject.handleDisplayTimer();
        expect(subject.buttonActive).to.equal(true);
      });

      it("calls render", function() {
        sinon.spy(subject, "render");
        subject.handleDisplayTimer();
        expect(subject.render).to.have.been.called;
      });

      describe("when buttonActive is true", function() {
        beforeEach(function() {
          subject.handleDisplayTimer();
        });

        it("sets the filledClass to '' ", function() {
          expect(subject.filledClass).to.equal("");
        });

        it("sets the unfilledClass to st-hidden ", function() {
          expect(subject.unfilledClass).to.equal("st-hidden");
        });
      });

      describe("when buttonActive is false", function() {
        beforeEach(function() {
          subject.handleDisplayTimer();
        });

        it("sets the unfilledClass to '' ", function() {
          expect(subject.filledClass).to.equal("");
        });

        it("sets the filledClass to st-hidden ", function() {
          expect(subject.unfilledClass).to.equal("st-hidden");
        });
      });
    });
  });
});
