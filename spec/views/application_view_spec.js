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
    subject = new App.Views.Application({el: '#applicationContainer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  xit("#sendAuthentication", function() {
    App.loggedInTeacher={
      email: "someone@somewhere.com",
      token: "1234567890"
    };
    subject.sendAuthentication(xhr);
    expect(requests[0].requestHeaders).to.include({"Authorization": 'Token token="1234567890", email="someone@somewhere.com"'});
  });

  xit("#initializeStudentCollection", function() {

  });

  xit("#initializeStudentCollectionFail", function() {

  });

  xit("#initializeStimuliCollections", function() {

  });

  xit("#initializeStimuliCollectionFail", function() {

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
      // beforeEach(function() {
      //   localStorage.loggedInTeacher = {name: "teacher", class: "the cool one"};
      // });

      // afterEach(function() {
      //   localStorage.removeItem("loggedInTeacher");
      // });
      // it("sets the App.loggedInTeacher from the teacher in local storage", function() {
      //   subject.initialize();
      //   expect(App.loggedInTeacher).to.eql({name: "teacher", class: "the cool one"});
      // });

      it("triggers loginSuccess", function() {
        sinon.spy(App.Dispatcher, "trigger");
        subject.initialize();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("loginSuccess");
        App.Dispatcher.trigger.restore();
      });
    });

    // describe("the teacher is not logged in", function() {
    //   it("creates a login view", function() {
    //     expect(subject.loginView.$el.find('#loginContainer')).to.exist;
    //   });
    });
  });

  describe("#listen", function() {
    it("listens for loginSuccess", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "loginSuccess", subject.handleLoggedIn);
    });

    it("listens for initializeConferenceManagement", function() {
      sinon.spy(subject, "listenTo");
      subject.listen();
      expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "initializeConferenceManagementRequested", subject.initializeConferenceManagement);
    });
  });

  describe("#removeLogin", function() {
    it("removes the Login View", function() {
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
  });

  it("#initializeConferenceManagement", function() {
    subject.initializeConferenceManagement();
    expect(subject.conferenceManagement).to.be.an.instanceOf(App.Views.ConferenceManagement);
    expect($(App.Config.el)).not.to.be.empty;
  });
});
