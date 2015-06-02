describe('App.Views.ConferenceStudent', function() {
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
    subject = new App.Views.ConferenceStudent({el: '#applicationContainer', model: App.conferences.at(0)});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("sets the student model", function() {
    expect(subject.studentModel).to.be.an.instanceOf(App.Models.Student);
  });

  it("#events", function() {
    expect(subject.events["click .js-startSession"]).to.equal("handleStartSession");
  });

  it("#renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("#templateJSON", function() {
    it("sets the shortName", function() {
      expect(subject.templateJSON().shortName).to.equal("CLARK K.");
    });

    it("sets the reading stage", function() {
      expect(subject.templateJSON().reading_stage).to.equal(3);
    });

    it("sets the daysOnCurrentReadingStage", function() {
      expect(subject.templateJSON().daysOnCurrentReadingStage).to.be.a("number");
    });

    it("sets the daysSinceLastSession", function() {
      expect(subject.templateJSON().daysSinceLastSession).to.equal(1);
    });

    it("sets the number_per_week", function() {
      expect(subject.templateJSON().number_per_week).to.equal(3);
    });
  });

  describe("helper functions", function() {
    xit("#daysOnCurrentReadingStage", function() {
      expect(subject.daysOnCurrentReadingStage()).to.equal();
    });

    it("#daysSinceLastSession", function() {
      expect(subject.daysSinceLastSession()).to.to.equal(1);
    });
  });

  describe("#handleStartSession", function() {
    it("sets the selected student", function() {
      subject.handleStartSession()
      expect(App.selectedStudent).to.equal(subject.studentModel);
    });

    it("adds the student model to App.students", function() {
      App.students = new App.Collections.Students();
      subject.handleStartSession()
      expect(App.students.length).to.equal(1);
    });

    it("triggers startSessionRequested", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleStartSession();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("startSessionRequested");
      App.Dispatcher.trigger.restore();
    });

  });
});
