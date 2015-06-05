describe('App.Views.EditStudentReadingStage', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Views.EditStudentReadingStage({el: '#applicationContainer'});
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("has a click event", function() {
    expect(subject.events["click .reading-stage__choice"]).to.equal("handleReadingStageChoice");
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("calls makeActive", function() {
      sinon.spy(subject, "makeActive");
      subject.render();
      expect(subject.makeActive).to.have.been.calledWith(App.selectedStudent.get("reading_stage"));
    });
  });

  describe("handlers", function() {
    describe("#handleReadingStageChoice", function() {
      it("sets the newly selected reading stage", function() {
        App.selectedStudent.set({reading_stage: 5});
        subject.handleReadingStageChoice({currentTarget: {innerText: "2"}});
        expect(App.selectedStudent.get("reading_stage")).to.equal(2);
      });

      it("calls makeInactive", function() {
        sinon.spy(subject, "makeInactive");
        subject.handleReadingStageChoice({currentTarget: {innerText: "3"}});
        expect(subject.makeInactive).to.have.been.called;
      });

      it("calls makeActive", function() {
        sinon.spy(subject, "makeActive");
        subject.handleReadingStageChoice({currentTarget: {innerText: "3"}});
        expect(subject.makeActive).to.have.been.called;
      });

      it("sets the reading stage on the selected student", function() {
        subject.handleReadingStageChoice({currentTarget: {innerText: "3"}});
        expect(App.selectedStudent.get("reading_stage")).to.equal(3);
      });

      it("calls save on the model", function() {
        sinon.spy(App.Models, "UserReadingStages");
        subject.handleReadingStageChoice({currentTarget: {innerText: "3"}});
        expect(App.Models.UserReadingStages).to.have.been.calledWith({
          student_id: App.selectedStudent.get("id"),
          assessor_id: App.loggedInTeacher.id,
          reading_stage: "3",
          context: "teacher_notepad"
        });
      });
    });
  });

  describe("helper functions", function() {
    it("#makeActive", function() {
      subject.render();
      subject.makeInactive();
      subject.makeActive(5);
      expect($("#applicationContainer .reading-stage__choice.st-selected")[0].innerText).to.equal("5");
    });

    it("makeInactive", function() {
      subject.render();
      subject.makeInactive();
      subject.makeActive(5);
      expect($("#applicationContainer .reading-stage__choice.st-selected")[0].innerText).to.equal("5");
      subject.makeInactive();
      expect($("#applicationContainer .reading-stage__choice.st-selected").length).to.equal(0);
    });

    describe("#updateUser", function() {
     it("calls fetch on the roster", function() {
       sinon.spy(App.roster, "fetch");
       subject.updateUser();
       expect(App.roster.fetch).to.have.been.called;
     });
    });
  });
});
