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
    it("calls handleCloseRequest on click js-exitEditStudent event", function() {
      expect(subject.events["click .js-exitEditStudent"]).to.equal("handleCloseRequest");
    });

    it("calls handleTabRequest on click js-editReadingStage event", function() {
      expect(subject.events["click #js-editReadingStage"]).to.equal("handleTabRequest");
    });

    it("calls handleTabRequest on click js-editNotes event", function() {
      expect(subject.events["click #js-editNotes"]).to.equal("handleTabRequest");
    });
  });

  describe("#initialize", function() {
    it("calls render", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("caches edit container element", function() {
      subject.initialize();
      expect(subject.$editContainer).not.to.be.null;
    });

    it("creates an edit student notes view", function() {
      subject.initialize();
      expect(subject.views["js-editNotes"]).to.be.an.instanceOf(App.Views.EditStudentNotes);
      expect(subject.views["js-editReadingStage"]).to.be.an.instanceOf(App.Views.EditStudentReadingStage);
    });

    it("#makeActive", function() {
      sinon.spy(subject, "makeActive");
      subject.initialize();
      expect(subject.makeActive).to.have.been.called;
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function() {
    App.selectedStudent.set("reading_stage",1);
    App.selectedStudent.set("first_name","Bob");
    App.selectedStudent.set("last_name","Jones");
    expect(subject.templateJSON().reading_stage).to.equal(1);
    expect(subject.templateJSON().student_shortname).to.equal("BOB J.");
  });

  describe("#makeActive", function() {
    it("adds the selected class to the tab", function() {
      appendFixture("div", { id: "js-editNotes" });
      subject.makeActive("js-editNotes");
      expect($("#" + "js-editNotes")).to.have.class("st-selected");
    });

    it("renders the selected tab", function() {
      sinon.spy(subject.views["js-editNotes"], "render");
      subject.makeActive("js-editNotes");
      expect(subject.views["js-editNotes"].render).to.have.been.called;
    });
  });

  describe("#makeInactive", function() {
    it("removes selected class from all tabs", function() {
      appendFixture("div", { id: "js-editNotes" });
      subject.makeActive("js-editNotes");
      subject.makeInactive();
      for (var i=0; i< subject.ids.length; i += 1) {
        expect($("#" + subject.ids[i])).not.to.have.class("st-selected");
      }
    });
  });

  it("#handleTabRequest", function() {
    sinon.spy(subject, "makeActive");
    sinon.spy(subject, "makeInactive");
    subject.handleTabRequest({currentTarget: {id: "js-editNotes"}});
    expect(subject.makeInactive).to.have.been.called;
    expect(subject.makeActive).to.have.been.calledWith("js-editNotes");
  });

  describe("#handleCloseRequest", function() {
    it("empties the element", function() {
      subject.render();
      subject.handleCloseRequest();
      expect(subject.$el).to.be.empty;
    });

    it("triggers the matrixStudentSelectorTabActiveRequest event", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleCloseRequest();
      expect(App.Dispatcher.trigger).to.have.been.called;
      App.Dispatcher.trigger.restore();
    });
  });
});
