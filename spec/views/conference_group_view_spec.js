describe('App.Views.ConferenceGroup', function() {
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
    subject = new App.Views.ConferenceGroup({el: '#applicationContainer', model: App.conferences.get(97), students: App.roster.slice(0, 6)});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("sets the students", function() {
    expect(subject.students[0]).to.be.an.instanceOf(App.Models.Student);
  });

  it("#events", function() {
    expect(subject.events["click .js-startSession"]).to.equal("handleStartSession");
    expect(subject.events["click .js-studentGroup"]).to.equal("handleGroupDropdown");
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
    it("sets the name", function() {
      expect(subject.templateJSON().name).to.equal("Ledner, Schuppe and Jacobi");
    });

    it("sets the daysSinceLastSession", function() {
      var clock = sinon.useFakeTimers(new Date(2015,4,29).getTime());
      expect(subject.templateJSON().daysSinceLastSession).to.equal(1);
      clock.restore();
    });
  });

  describe("helper functions", function() {
    it("#daysSinceLastSession", function() {
      var clock = sinon.useFakeTimers(new Date(2015,4,29).getTime());
      expect(subject.daysSinceLastSession()).to.to.equal(1);
      clock.restore();
    });
  });

  describe("handlers", function() {
    describe("#handleGroupDropdown", function() {
      it("triggers conferenceGroupDropdownRequested", function() {
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleGroupDropdown();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("conferenceGroupDropdownRequested:97");
        App.Dispatcher.trigger.restore();
      });
    });

    describe("#handleStartSession", function() {
      it("sets the selected student", function() {
        subject.handleStartSession();
        expect(App.selectedStudent).to.equal(App.students.at(0));
      });

      it("adds the student model to App.students", function() {
        App.students = new App.Collections.Students();
        subject.handleStartSession();
        expect(App.students.length).to.equal(6);
      });

      it("sets the selected conference", function() {
        subject.handleStartSession();
        expect(App.selectedConference).to.equal(subject.model);
      });

      it("triggers startSessionRequested", function() {
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleStartSession();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("startSessionRequested");
      });
    });

    describe("#handleEditNumberPerWeek", function() {
      it("sets the select value to the number of conferences per week", function() {
        subject.render();
        subject.$el.find("#numberPerWeekSelect").val(subject.model.get("number_per_week") + 1);
        subject.handleEditNumberPerWeek();
        expect(subject.$el.find("#numberPerWeekSelect").val()).to.equal(subject.model.get("number_per_week").toString());
      });

      xit("sets the local_updated_at", function() {

      });

      it("calls save on the model", function() {
        sinon.spy(subject.model, "save");
        subject.handleEditNumberPerWeek();
        expect(subject.model.save).to.have.been.called;
      });
    });
  });
});
