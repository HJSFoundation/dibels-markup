describe('App.Views.ConferenceManagementSingle', function() {
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
    subject = new App.Views.ConferenceManagementSingle({ el: '#applicationContainer' });
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#initialize", function() {
    it("calls render on initialize", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("calls listen on initialize", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });

    it("sets the selected skill to nothing", function() {
      expect(App.selectedSkill).to.equal("");
    });
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "addStudentRequested", subject.handleAddStudentRequested);
  });

  describe("#render", function() {
    it("#renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a conference student single view", function() {
      subject.render();
      expect($(".icon-student").length).not.to.equal(0);
    });
  });

  describe("#handleAddStudentRequested", function() {
    it("removes itself", function() {
      subject.handleAddStudentRequested();
      expect($("container--management container").length).to.equal(0);
    });
  });
});
