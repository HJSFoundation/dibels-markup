describe('App.Views.Application', function() {
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

    subject = new App.Views.Application({ el: '#applicationContainer' });
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  xit("#sendAuthentication", function() {
    App.currentTeacher={
      email: "someone@somewhere.com",
      token: "1234567890"
    };
    subject.sendAuthentication(xhr);
    expect(requests[0].requestHeaders).to.include({"Authorization": 'Token token="1234567890", email="someone@somewhere.com"'});
  });

  it("has a reference to the application container", function() {
    expect(subject.$el).to.exist;
    expect(subject.$el).to.have.id('applicationContainer');
  });

  xit("#handleLoggedIn", function() {
    sinon.stub(subject, "initializeStudentCollection");
    subject.handleLoggedIn();
    expect(subject.initializeStudentCollection).to.have.been.called;
  });

  describe("initialize", function() {
    it("calls listen", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });

    describe("the teacher is logged in", function() {
      beforeEach(function() {
        localStorage.setItem("currentTeacher", JSON.stringify({id: 313, classroom_id: 91}));
      });

      it("sets the App.currentTeacher from the teacher in local storage", function() {
        subject.initialize();
        expect(App.currentTeacher).to.eql({id: 313, classroom_id: 91});
      });

      it("triggers loginSuccess", function() {
        sinon.spy(App.Dispatcher, "trigger");
        localStorage.setItem("currentTeacher", JSON.stringify({id: 313, classroom_id: 91, loggedIn:true}));
        subject.initialize();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("loginSuccess");
        App.Dispatcher.trigger.restore();
      });
    });

    describe("the teacher is not logged in", function() {
      it("creates a login view", function() {
        localStorage.removeItem("currentTeacher");
        subject.initialize();
        expect(subject.loginView.$el.find('#loginContainer')).to.exist;
      });
    });
  });

  describe("#listen", function() {
    it("listens for loginSuccess", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "loginSuccess", subject.handleLoggedIn);
    });

    it("listens for logout", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "logout", subject.handleLogout);
    });

    it("listens for resyncRequest", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "resyncRequest", subject.handleResyncRequest);
    });

    it("listens for initializeConferenceManagement", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "initializeConferenceManagementRequested", subject.initializeConferenceManagement);
    });

    it("listens for the resume", function() {
      sinon.spy(document, "addEventListener");
      subject.listen();
      expect(document.addEventListener).to.have.been.calledWith("resume", subject.handleResumeEvent, false);
      document.addEventListener.restore();
    });

    it("listens for the offline", function() {
      sinon.spy(document, "addEventListener");
      subject.listen();
      expect(document.addEventListener).to.have.been.calledWith("offline", subject.handleOfflineEvent, false);
      document.addEventListener.restore();
    });

    it("listens for the online", function() {
      sinon.spy(document, "addEventListener");
      subject.listen();
      expect(document.addEventListener).to.have.been.calledWith("online", subject.handleOnlineEvent, false);
      document.addEventListener.restore();
    });
  });

  describe("helpers", function() {
    it("#displayLoadingScreen", function() {
      subject.displayLoadingScreen();
      expect(subject.loadingScreen).to.be.an.instanceOf(App.Views.Loading);
    });

    describe("#removeLogin", function() {
      it("removes the Login View", function() {
        this.timeout(15000);
        initializeTestData();
        subject.displayLoadingScreen();
        subject.removeLogin();
        expect($("#loginContainer")).not.to.exist;
      });

      it("calls initializeConferenceManagement", function() {
        sinon.spy(subject, "initializeConferenceManagement");
        subject.displayLoadingScreen();
        subject.removeLogin();
        expect(subject.initializeConferenceManagement).to.have.been.called;
      });

      it("stops listening to loginSuccess", function() {
        sinon.spy(subject, "stopListening");
        subject.displayLoadingScreen();
        subject.removeLogin();
        expect(subject.stopListening).to.have.been.calledWith(App.Dispatcher, "loginSuccess");
      });
    });

    it("#initializeConferenceManagement", function() {
      subject.initializeConferenceManagement();
      expect(subject.conferenceManagement).to.be.an.instanceOf(App.Views.ConferenceManagement);
      expect($(App.Config.el)).not.to.be.empty;
    });

    describe("#resync", function() {

    });
  });

  describe("handlers", function() {
    it("#handleResumeEvent", function() {
      sinon.stub(subject, "resync");
      subject.handleResumeEvent();
      expect(subject.resync).to.have.been.called;
    });

    it("#handleResyncRequest", function() {
      sinon.stub(subject, "resync");
      subject.handleResyncRequest();
      expect(subject.resync).to.have.been.called;
    });

    it("#handleOfflineEvent", function() {
      App.online = true;
      subject.handleOfflineEvent();
      expect(App.online).to.equal(false);
    });

    it("#handleOnlineEvent", function() {
      App.online = false;
      subject.handleOnlineEvent();
      expect(App.online).to.equal(true);
    });
  });
});
