describe('App.Views.MatrixNonStudentSelectorTab', function() {
  var subject;
  var xhr;
  var requests;


  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-tab" });
    subject = new App.Views.MatrixNonStudentSelectorTab({
      el: '.js-tab'
    });
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#initialize", function() {
    it("sets label to Student", function() {
      expect(subject.label).to.equal("Student");
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("helper functions", function() {
    it("#templateJSON", function() {
      expect(subject.templateJSON().label).to.equal("Student");
    });
  });

  it("#handleClick", function() {
    subject.handleClick();
    expect(subject.conferenceManagementSingle).to.be.an.instanceOf(App.Views.ConferenceManagementSingle);
  });

});
