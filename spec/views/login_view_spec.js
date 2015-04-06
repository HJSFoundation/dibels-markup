describe('App.Views.Login', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Views.Login({el: '#applicationContainer'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("has a login success event", function() {
      expect(subject.events["click #submit"]).to.equal("handleLoginSuccess");
    });
  });

  it("calls render on initialize", function() {
    expect(subject.$el).not.to.be.empty;
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("handlers", function() {

    afterEach(function() {
      App.Dispatcher.trigger.restore();
    });

    it("handles login success", function() {
      var loginSuccess = sinon.spy();
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleLoginSuccess();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("loginSuccess");
    });
  });
});
