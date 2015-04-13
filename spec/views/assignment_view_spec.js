describe('App.Views.Assignment', function() {
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
    appendFixture("div", { class: "js-drawerOverlay" });
    subject = new App.Views.Assignment({el: '.js-drawerOverlay'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
    expect(subject.template).to.equal(App.templates.assignments);
  });

  describe("events", function() {
    it("handles a click event", function() {
      expect(subject.events.click).to.equal("removeView");
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
    it("#removeView", function() {
      subject.removeView();
      expect(subject.$el.html()).to.be.empty;
    });
  });
});
