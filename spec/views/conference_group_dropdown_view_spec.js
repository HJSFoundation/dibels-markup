describe('App.Views.ConferenceGroupDropdown', function() {
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
    subject = new App.Views.ConferenceGroupDropdown({conferenceId: 97, students: App.roster.models});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#initialize", function() {
    it("sets the conference id", function() {
      expect(subject.conferenceId).to.equal(97);
    });

    it("sets the students", function() {
      expect(subject.students[0]).to.be.an.instanceOf(App.Models.Student);
    });

    it("calls listen", function() {
      sinon.spy(subject, "listen");
      subject.initialize({conferenceId: 97, students: App.roster.models});
      expect(subject.listen).to.have.been.called;
    });
  });

  it("#renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("#templateJSON", function() {
    it("sets the students", function() {
      expect(subject.templateJSON().students[0]).to.be.an.instanceOf(App.Models.Student);
    });
  });

  describe("handlers", function() {
    describe("#handleGroupDropdown", function() {
      it("adds  or removes a hidden class", function() {
        subject.render();
        expect(subject.el.className).to.contain("st-hidden");
        subject.handleGroupDropdown();
        expect(subject.el.className).not.to.contain("st-hidden");
      });
    });
  });
});
