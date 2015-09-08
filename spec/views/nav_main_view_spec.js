describe('App.Views.NavMain', function() {
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
    subject = new App.Views.NavMain({ el: '#applicationContainer' });
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("has a handle toggle menu event", function() {
      expect(subject.events["click .js-menuToggle"]).to.equal("handleToggleMenu");
    });

    it("has a handle display manage event", function() {
      expect(subject.events["click .js-manageButton"]).to.equal("handleDisplayManage");
    });

    it("has a handle logout event", function() {
      expect(subject.events["click .js-logout"]).to.equal("handleLogout");
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

  describe("handlers", function() {
    it("handles toggle menu", function() {
      subject.render();
      $(".js-mainNav").removeClass("st-show");
      subject.handleToggleMenu();
      expect($(".js-mainNav")).to.have.class("st-show");
    });

    describe("handles display manage", function() {
      describe("when app browser does not exist", function() {
        beforeEach(function() {
          App.browser = null;
        });

        it("creates the in app browser", function() {
          subject.handleDisplayManage();
          expect(window.open).to.have.been.calledWith(App.Config.tutormateUrl() + "/students/manage", "_blank", "location=yes");
        });

        it("adds an event listener to the in app browser", function() {
          subject.handleDisplayManage();
          expect(App.browser.addEventListener).to.have.been.calledWith("exit", subject.handleInAppBrowserExit);
        });
      });
    });

    it("handles in app browser exit", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleInAppBrowserExit();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("resyncRequest");
      App.Dispatcher.trigger.restore();
    });

    it("handles log out", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleLogout();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("endSessionLogoutRequested");
      App.Dispatcher.trigger.restore();
    });
  });
});
