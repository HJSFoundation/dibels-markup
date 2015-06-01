describe('App.Views.ConferenceManagement', function() {
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
    subject = new App.Views.ConferenceManagement({el: '#applicationContainer'});
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

    it("creates a students collection", function() {
      expect(App.students).to.be.an.instanceOf(App.Collections.Students);
    });

    it("sets the selected skill to nothing", function() {
      expect(App.selectedSkill).to.equal("");
    });
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "startSessionRequested", subject.handleStartSessionRequested);
  });

  describe("#render", function() {
    it("#renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a conference group view", function() {
      subject.render();
      expect($(".js-studentGroup").length).not.to.equal(0);
    });

    it("creates a conference group dropdown view", function() {
      subject.render();
      expect($(".js-groupDropdown").length).not.to.equal(0);
    });

    it("creates a conference student view", function() {
      subject.render();
      expect($(".icon-student").length).not.to.equal(0);
    });
  });

  describe("#handleStartSessionRequested", function() {

    beforeEach(function() {
      App.roster = new App.Collections.Students();
      App.roster.create({id: 1, first_name: "Bernie", last_name: "Bivins", reading_stage: 7});
      App.roster.create({id: 2, first_name: "Clark", last_name: "Kempt", reading_stage: 3});
      App.roster.create({id: 3, first_name: "Princess", last_name: "Peach", reading_stage: 2});


      App.students = new App.Collections.Students();
      App.students.add(App.roster.at(0));
      App.students.add(App.roster.at(1));
      App.students.add(App.roster.at(2));

      App.selectedStudent = App.students.at(0);
      App.selectedSkill = "";
    });

    it("creates a teacher workspace view", function() {
      subject.handleStartSessionRequested();
      expect(subject.teacherWorkspace).to.be.an.instanceOf(App.Views.TeacherWorkspace);
    });

    it("removes itself", function() {
      subject.handleStartSessionRequested();
      expect($("container--management container").length).to.equal(0);
    });

  });
});
