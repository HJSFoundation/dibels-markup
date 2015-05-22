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
    subject = new App.Views.EditStudent();
  });

  afterEach(function() {
    _.bindAll.restore();
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
    it("calls handleCloseRequest on click js-editStudentButtonClose event", function() {
      expect(subject.events["click .js-editStudentButtonClose"]).to.equal("handleCloseRequest");
    });
    it("calls handleTabRequest on click js-editReadingStage event", function() {
      expect(subject.events["click #js-editReadingStage"]).to.equal("handleTabRequest");
    });
    it("calls handleTabRequest on click js-editAssignments event", function() {
      expect(subject.events["click #js-editAssignments"]).to.equal("handleTabRequest");
    });
    it("calls handleTabRequest on click js-editNotes event", function() {
      expect(subject.events["click #js-editNotes"]).to.equal("handleTabRequest");
    });
  });

  it("#handleTabRequest", function() {
    sinon.spy(subject, "makeActive");
    sinon.spy(subject, "makeInactive");
    subject.handleTabRequest({currentTarget: {id: "js-editNotes"}});
    expect(subject.makeInactive).to.have.been.called;
    expect(subject.makeActive).to.have.been.calledWith("js-editNotes");
  });
});
