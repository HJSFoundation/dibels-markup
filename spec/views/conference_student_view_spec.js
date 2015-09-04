describe("App.Views.ConferenceStudent", function() {
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
    subject = new App.Views.ConferenceStudent({ el: "#applicationContainer", model: App.conferences.get(76) });
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
    expect(subject.events["change .js-editNumberPerWeek"]).to.equal("handleEditNumberPerWeek");
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("sets the select value to the number of confereces per week", function() {
      subject.render();
      expect(subject.$el.find("#numberPerWeekSelect").val()).to.equal(subject.model.get("number_per_week").toString());
    });
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
      var clock = sinon.useFakeTimers(moment.utc([2015,4,29]).valueOf());
      expect(subject.templateJSON().daysSinceLastSession).to.equal(1);
      clock.restore();
    });
  });

  describe("helper functions", function() {
    xit("#daysOnCurrentReadingStage", function() {
      expect(subject.daysOnCurrentReadingStage()).to.equal();
    });

    it("#daysSinceLastSession", function() {
      var clock = sinon.useFakeTimers(moment.utc([2015,4,29]).valueOf());
      expect(subject.daysSinceLastSession()).to.to.equal(1);
      clock.restore();
    });
  });

  describe("#handleStartSession", function() {
    it("sets the selected student", function() {
      subject.handleStartSession();
      expect(App.selectedStudent).to.equal(subject.studentModel);
    });

    it("adds the student model to App.students", function() {
      App.students = new App.Collections.Students();
      subject.handleStartSession();
      expect(App.students.length).to.equal(1);
    });

    it("sets the selectedConference", function() {
      subject.handleStartSession();
      expect(App.selectedConference).to.equal(subject.model);
    });

    it("triggers startSessionRequested", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleStartSession();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("startSessionRequested");
      App.Dispatcher.trigger.restore();
    });
  });

  describe("#handleEditNumberPerWeek", function() {
    it("sets the select value to the number of conferences per week", function() {
      subject.render();
      subject.$el.find("#numberPerWeekSelect").val(subject.model.get("number_per_week") + 1);
      subject.handleEditNumberPerWeek();
      expect(subject.$el.find("#numberPerWeekSelect").val()).to.equal(subject.model.get("number_per_week").toString());
    });

    it("calls save on the model", function() {
      sinon.spy(subject.model, "save");
      subject.handleEditNumberPerWeek();
      expect(subject.model.save).to.have.been.called;
    });

    // TODO test fail on save

    it("calls sort on the collection", function() {
      sinon.spy(App.conferences, "sort");
      subject.handleEditNumberPerWeek();
      expect(App.conferences.sort).to.have.been.called;
      App.conferences.sort.restore();
    });

    it("sets the client_updated_at date", function() {
      var clock = sinon.useFakeTimers(moment.utc([2015,5,30]).valueOf());
      subject.handleEditNumberPerWeek();
      expect(subject.model.get("client_updated_at")).to.equal("2015-06-30T00:00:00.000Z");
      clock.restore();
    });

    it("triggers initializeConferenceManagementRequested", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleEditNumberPerWeek();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("initializeConferenceManagementRequested");
      App.Dispatcher.trigger.restore();
    });
  });
});
