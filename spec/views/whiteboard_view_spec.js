describe('App.Views.Whiteboard', function() {
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
    subject = new App.Views.Whiteboard({el: '#applicationContainer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("has a keyup event", function() {
    expect(subject.events.keyup).to.equal('handleKeyUp');
  });

  describe("#render", function() {
    beforeEach(function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.render();
    });

    afterEach(function() {
      App.Dispatcher.trigger.restore();
    });

    it("triggers a closeMatrix event", function() {
      expect(App.Dispatcher.trigger).to.have.been.calledWith("closeMatrix");
    });

    it("triggers a displayOpenMatrixButton event", function() {
      expect(App.Dispatcher.trigger).to.have.been.calledWith("displayOpenMatrixButton", false);
    });

    it("triggers a displayMenuAssessment event", function() {
      expect(App.Dispatcher.trigger).to.have.been.calledWith("displayMenuAssessment", false);
    });

    it("returns the $el html", function() {
      expect($("#applicationContainer").html()).to.equal(subject.template());
    });
  });

  describe("handlers", function() {
    it("handleSkillChangeRequest calls render", function() {
      sinon.spy(subject, "render");
      subject.handleSkillChangeRequest({});
      expect(subject.render).to.have.been.called;
    });

    describe("#handleEnterKeyPressed", function() {
      beforeEach(function() {
        subject.render();
      });

      it("appends a magnet onto the whiteboard", function() {
        $("input").val("some input");
        subject.handleEnterKeyPressed();
        expect($(".js-whiteboard").html()).not.to.be.empty;
      });

      it("clears the input", function() {
        $("input").val("some input");
        subject.handleEnterKeyPressed();
        expect($("input").val()).to.be.empty;
      });

      it("sets the magnet to draggable", function() {
        subject.handleEnterKeyPressed();
        expect($(".js-magnet").attr("class")).to.include("ui-draggable");
      });
    });

    describe("#handleKeyUp", function() {
      it("calls handleEnterKeyPressed when the keycode is 13", function() {
        sinon.spy(subject, "handleEnterKeyPressed");
        subject.render();
        subject.handleKeyUp({keyCode:13});
        expect(subject.handleEnterKeyPressed).to.have.been.called;
      });

      it("does not call handleEnterKeyPressed when the keycode is not 13", function() {
        sinon.spy(subject, "handleEnterKeyPressed");
        subject.handleKeyUp({keyCode:12});
        expect(subject.handleEnterKeyPressed).not.to.have.been.called;
      });

      it("returns false", function() {
        expect(subject.handleKeyUp({keyCode:12})).to.equal(false);
      });
    });
  });
});
