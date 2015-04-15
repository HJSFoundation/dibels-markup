describe('App.Views.EditStudent', function() {
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
    appendFixture("div", { class: "js-overlay" });
    subject = new App.Views.EditStudent({el: '.js-overlay'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
    expect(subject.template).to.equal(App.templates.editStudent);
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("events", function() {
    it("calls handleClick on click event", function() {
      expect(subject.events.click).to.equal("handleClick");
    });
  });

  it("#handleClick", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
    subject.handleClick();
    expect(subject.$el).to.be.empty;
  });

});
// 