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

    subject = new App.Views.Application({el: '#applicationContainer'});
  });

  it("has a reference to the application container", function() {
    expect(subject.$el).to.exist;
    expect(subject.$el).to.have.id('applicationContainer');
  });

  it("handles login success", function() {
    subject.handleLoggedIn();
    expect(subject.teacherWorkspaceView.$el.find('.workspace')).to.exist;
  });

  describe("initialize", function() {
    it("creates a login view", function() {
      expect(subject.loginView.$el.find('#loginContainer')).to.exist;
    });

    // it("listens for the loginSuccess event", function() {
    //   var listenTo = sinon.spy;
    //   subject.listen();
    //   expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "toggleDrawerRequest", subject.handleToggleDrawerRequest);
      // var handleLoggedIn = sinon.spy();
      // App.Dispatcher.trigger('loginSuccess', handleLoggedIn);
      // expect(handleLoggedIn).to.have.been.called;
    // });
  });
});
