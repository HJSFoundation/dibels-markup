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
    subject = new App.Views.ConferenceGroup({el: '#applicationContainer', model: App.conferences.at(1), students: App.roster.slice(0, 6)});
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
  });

  it("#renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("#templateJSON", function() {
    it("sets the name", function() {
      expect(subject.templateJSON().name).to.equal("Ledner, Schuppe and Jacobi");
    });

    it("sets the daysSinceLastSession", function() {
      expect(subject.templateJSON().daysSinceLastSession).to.equal(1);
    });

    it("sets the number_per_week", function() {
      expect(subject.templateJSON().number_per_week).to.equal(2);
    });
  });

  describe("helper functions", function() {
    it("#daysSinceLastSession", function() {
      expect(subject.daysSinceLastSession()).to.to.equal(1);
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

    it("triggers startSessionRequested", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleStartSession();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("startSessionRequested");
    });
  });
});
