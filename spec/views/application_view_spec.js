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

  it("has a reference to the application container", function() {
    expect(subject.$el).to.exist;
    expect(subject.$el).to.have.id('applicationContainer');
  });

  it("#handleLoggedIn", function() {
    sinon.stub(subject, "initializeStudentCollection");
    subject.handleLoggedIn();
    expect(subject.initializeStudentCollection).to.have.been.called;
  });

  describe("initialize", function() {
    it("creates a login view", function() {
      expect(subject.loginView.$el.find('#loginContainer')).to.exist;
    });

    it("calls listen", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "loginSuccess", subject.handleLoggedIn);
  });
});
