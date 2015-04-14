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

    appendFixture("div", { class: "js-buttonTimer" });
    subject = new App.Views.ButtonTimer({el: '.js-buttonTimer'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal('handleDisplayTimer');
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

    it("#handleDisplayTimer", function() {
      var displayTimer = sinon.spy();
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleDisplayTimer();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("displayTimerButtonTapped");
      App.Dispatcher.trigger.restore();
    });

    it("#handleCloseMatrix", function(){
      subject.handleCloseMatrix();
      expect(subject.$el).to.have.class("animated slideOutLeft");
    });
  });    

  it("#listen", function (){
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "closeMatrix", subject.handleCloseMatrix);
  });
  
});
