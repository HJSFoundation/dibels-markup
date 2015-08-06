describe('App.Views.Timer', function() {
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
    subject = new App.Views.Timer({el: '.js-buttonTimer'});
  });

  afterEach(function() {
    _.bindAll.restore();
    clearInterval(subject.interval);
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
  });

  describe("#initialize", function() {
    it("calls initializeSeconds", function() {
      sinon.spy(subject, "initializeSeconds");
      subject.initialize();
      expect(subject.initializeSeconds).to.have.been.calledWith(5);
    });

    it("calls initializeMinutes", function() {
      sinon.spy(subject, "initializeMinutes");
      subject.initialize();
      expect(subject.initializeMinutes).to.have.been.called;
    });

    it("calls listen", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });

    it("handles a click event", function() {
      subject.initialize();
      expect(subject.events["click #"+subject.buttonId]).to.equal('handleTimerButtonClick');
    });
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "toggleTimerRequested", subject.toggleTimerRequested);
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("#templateJSON", function() {
    it("sets the action", function() {
      expect(subject.templateJSON().action).to.equal("start");
    });

    it("sets the seconds", function() {
      subject.initializeSeconds(5);
      expect(subject.templateJSON().seconds).to.equal(subject.seconds);
    });

    it("sets the minutes", function() {
      subject.initializeMinutes();
      expect(subject.templateJSON().minutes).to.equal(subject.minutes);
    });
  });

  describe("handlers", function() {
    describe("#handleTimerButtonClick", function() {
      beforeEach(function() {
        subject.initializeMinutes();
        subject.initializeSeconds(5);
        subject.render();
      });

      describe("when action === start", function() {
        it("sets the time's seconds", function() {
          subject.$seconds.val(10);
          subject.handleTimerButtonClick();
          expect(subject.time.seconds).to.equal('10');
        });

        it("sets the time's minutes", function() {
          subject.$minutes.val(1);
          subject.handleTimerButtonClick();
          expect(subject.time.minutes).to.equal('1');
        });

        it("calls startTimer", function() {
          sinon.spy(subject, "startTimer");
          subject.action = "start";
          subject.handleTimerButtonClick();
          expect(subject.startTimer).to.have.been.called;
        });
      });

      describe("when action != start", function() {
        it("calls stopTimer", function() {
          sinon.spy(subject, "stopTimer");
          subject.action = "stop";
          subject.handleTimerButtonClick();
          expect(subject.stopTimer).to.have.been.calledWith(1);
        });
      });
    });
  });

  describe("helper functions", function() {
    describe("#formatTime", function() {
      it("pads the number with 0 if it is 1 digit", function() {
        expect(subject.formatTime(3)).to.equal("03");
      });

      it("does not pad the string if the number is 2 digits", function() {
        expect(subject.formatTime(10)).to.equal("10");
      });
    });

    it("#initializeSeconds", function() {
      subject.initializeSeconds(5);
      expect(subject.seconds[1]).to.eql({value: 5, display: "05"});
    });

    it("#initializeMinutes", function() {
      subject.initializeMinutes();
      expect(subject.minutes[1]).to.eql({value: 1, display: "01"});
    });

    describe("#toggleTimerRequested", function() {
      it("calls render", function() {
        sinon.spy(subject, "render");
        subject.toggleTimerRequested();
        expect(subject.render).to.have.been.called;
      });

      it("sets the visible property", function() {
        subject.toggleTimerRequested();
        expect(subject.visible).to.equal(true);
      });
    });

    describe("#startTimer", function() {
      it("calls initializeSeconds", function() {
        sinon.spy(subject, "initializeSeconds");
        subject.startTimer();
        expect(subject.initializeSeconds).to.have.been.calledWith(1);
      });

      it("sets the action to stop", function() {
        this.action = "start";
        subject.startTimer();
        expect(subject.action).to.equal("stop");
      });

      it("calls render", function() {
        sinon.spy(subject, "render");
        subject.startTimer();
        expect(subject.render).to.have.been.called;
      });

      it("calls renderTimerDisplay", function() {
        sinon.spy(subject, "renderTimerDisplay");
        subject.startTimer();
        expect(subject.renderTimerDisplay).to.have.been.called;
      });

      it("calls disableTimeSelection", function() {
        sinon.spy(subject, "disableTimeSelection");
        subject.startTimer();
        expect(subject.disableTimeSelection).to.have.been.called;
      });

      it("creates an interval property", function() {
        sinon.spy(window, "setInterval");
        subject.startTimer();
        expect(subject.interval).not.to.be.undefined;
        expect(window.setInterval).to.have.been.calledWith(subject.updateTimerDisplay, 1000);
      });
    });

    describe("#stopTimer", function() {
      it("clears the interval", function() {
        sinon.spy(window, "clearInterval");
        subject.stopTimer();
        expect(window.clearInterval).to.have.been.calledWith(this.interval);
      });

      it("calls initializeSeconds", function() {
        sinon.spy(subject, "initializeSeconds");
        subject.stopTimer(5);
        expect(subject.initializeSeconds).to.have.been.calledWith(5);
      });

      it("sets the action to start", function() {
        this.action = "stop";
        subject.stopTimer(5);
        expect(subject.action).to.equal("start");
      });

      it("calls render", function() {
        sinon.spy(subject, "render");
        subject.stopTimer(5);
        expect(subject.render).to.have.been.called;
      });

      it("calls enableTimeSelection", function() {
        sinon.spy(subject, "enableTimeSelection");
        subject.stopTimer(5);
        expect(subject.enableTimeSelection).to.have.been.called;
      });

      it("calls renderTimerDisplay", function() {
        sinon.spy(subject, "renderTimerDisplay");
        subject.stopTimer(5);
        expect(subject.renderTimerDisplay).to.have.been.called;
      });
    });

    it("#enableTimeSelection", function() {
      subject.render();
      subject.$minutes.prop("disabled", true);
      subject.$seconds.prop("disabled", true);
      subject.enableTimeSelection();
      expect(subject.$minutes.prop("disabled")).to.equal(false);
      expect(subject.$seconds.prop("disabled")).to.equal(false);
    });

    it("#disableTimeSelection", function() {
      subject.render();
      subject.$minutes.prop("disabled", false);
      subject.$seconds.prop("disabled", false);
      subject.disableTimeSelection();
      expect(subject.$minutes.prop("disabled")).to.equal(true);
      expect(subject.$seconds.prop("disabled")).to.equal(true);
    });

    describe("#updateTimerDisplay", function() {
      beforeEach(function(){
        subject.render();
      });

      it("sets the seconds", function() {
        subject.time = { seconds: 3, minutes: 0};
        subject.updateTimerDisplay();
        expect(subject.time.seconds).to.equal(2);
      });

      it("calls renderTimerDisplay", function() {
        sinon.spy(subject, "renderTimerDisplay");
        subject.updateTimerDisplay();
        expect(subject.renderTimerDisplay).to.have.been.called;
      });

      describe("decrements the time when greater than 0", function() {

        it("reduces the seconds by 1 second", function() {
          subject.time = { seconds: 0, minutes: 1};
          subject.updateTimerDisplay();
          expect(subject.time.seconds).to.equal(59);
        });

        it("reduces the minutes by 1 minute when seconds = 0", function() {
          subject.time = { seconds: 0, minutes: 1};
          subject.updateTimerDisplay();
          expect(subject.time.minutes).to.equal(0);
        });
      });

      describe("sets the time to 0 when out of time", function() {
        beforeEach(function() {
          subject.time = { seconds: 0, minutes: 0};
        });

        it("sets the seconds to 0", function() {
          subject.updateTimerDisplay();
          expect(subject.time.seconds).to.equal(0);
        });

        it("sets the minutes to 0", function() {
          subject.updateTimerDisplay();
          expect(subject.time.minutes).to.equal(0);
        });

        it("calls stopTimer", function() {
          sinon.spy(subject, "stopTimer");
          subject.updateTimerDisplay();
          expect(subject.stopTimer).to.have.been.called;
        });
      });
    });

    describe("#renderTimerDisplay", function() {
      beforeEach(function() {
        subject.render();
        subject.time.minutes = 2;
        subject.time.seconds = 5;
        subject.renderTimerDisplay();
      });

      it("sets the minute value", function() {
        expect(subject.$minutes.val()).to.equal("2");
      });

      it("sets the second value", function() {
        expect(subject.$seconds.val()).to.equal("5");
      });
    });
  });
});
