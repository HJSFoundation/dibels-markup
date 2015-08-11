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

  describe("has click events", function() {
    it("has a reading stage choice click event", function() {
      expect(subject.events["click .reading-stage__choice"]).to.equal("handleReadingStageChoice");
    });

    it("has a current reading stage click event", function() {
      expect(subject.events["click .js-currentReadingStage"]).to.equal("handleCurrentReadingStage");
    });

    it("has a reading stage choice click event", function() {
      expect(subject.events["click .js-initialReadingStage"]).to.equal("handleInitialReadingStage");
    });
  });

  it("sets is initial reading stage to false", function() {
    subject.isInitialReadingStage = true;
    subject.initialize();
    expect(subject.isInitialReadingStage).to.equal(false);
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("calls makeActive with reading stage when initial reading stage is false", function() {
      sinon.spy(subject, "makeActive");
      subject.render();
      expect(subject.makeActive).to.have.been.calledWith(subject.isInitialReadingStage ? App.selectedStudent.get("initial_reading_stage") : App.selectedStudent.get("reading_stage"));
    });

    it("calls makeActive with initial reading stage when initial reading stage is true", function() {
      sinon.spy(subject, "makeActive");
      subject.isInitialReadingStage = true;
      subject.render();
      expect(subject.makeActive).to.have.been.calledWith(subject.isInitialReadingStage ? App.selectedStudent.get("initial_reading_stage") : App.selectedStudent.get("reading_stage"));
    });
  });

  describe("#templateJSON", function() {
    it("returns selected student reading stage as current reading stage", function() {
      expect(subject.templateJSON().currentReadingStage).to.equal(App.selectedStudent.get("reading_stage"));
    });

    it("returns selected student initial reading stage as initial reading stage", function() {
      App.selectedStudent.set({"initial_reading_stage": 1});
      expect(subject.templateJSON().initialReadingStage).to.equal(App.selectedStudent.get("initial_reading_stage"));
    });

    it("returns initialReadingStageSelected as st-selected if isInitialReadingStage is true", function(){
      subject.isInitialReadingStage = true;
      expect(subject.templateJSON().initialReadingStageSelected).to.equal("st-selected");
    });

    it("returns initialReadingStageSelected as an empty string if isInitialReadingStage is false", function(){
      subject.isInitialReadingStage = false;
      expect(subject.templateJSON().initialReadingStageSelected).to.equal("");
    });

    it("returns currentReadingStageSelected as st-selected if isInitialReadingStage is false", function(){
      subject.isInitialReadingStage = false;
      expect(subject.templateJSON().currentReadingStageSelected).to.equal("st-selected");
    });

    it("returns currentReadingStageSelected as an empty string if isInitialReadingStage is true", function(){
      subject.isInitialReadingStage = true;
      expect(subject.templateJSON().currentReadingStageSelected).to.equal("");
    });

  });

  describe("handlers", function() {
    describe("#handleReadingStageChoice", function() {
      beforeEach(function(){
        sinon.stub(App.Models, 'UserReadingStages').returns({
          save: function(){
            return {
              done: function(){
                return {fail: function(){}}
              }
            }
          }
        });
      });
      afterEach(function(){
        App.Models.UserReadingStages.restore();

      });

      describe("when setting the reading stage", function() {
        it("sets the newly selected reading stage", function() {
          subject.isInitialReadingStage = false;
          App.selectedStudent.set({reading_stage: 5});
          subject.handleReadingStageChoice({currentTarget: {innerHTML: "2"}});
          expect(App.selectedStudent.get("reading_stage")).to.equal(2);
        });

        it("sets the reading stage on the selected student", function() {
          subject.isInitialReadingStage = false;
          subject.handleReadingStageChoice({currentTarget: {innerHTML: "3"}});
          expect(App.selectedStudent.get("reading_stage")).to.equal(3);
        });
      });

      describe("when setting the initial reading stage", function() {
        it("sets the newly selected initial reading stage", function() {
          subject.isInitialReadingStage = true;
          App.selectedStudent.set({initial_reading_stage: 5});
          subject.handleReadingStageChoice({currentTarget: {innerHTML: "2"}});
          expect(App.selectedStudent.get("initial_reading_stage")).to.equal(2);
        });

        it("sets the initial reading stage on the selected student", function() {
          subject.isInitialReadingStage = true;
          subject.handleReadingStageChoice({currentTarget: {innerHTML: "3"}});
          expect(App.selectedStudent.get("initial_reading_stage")).to.equal(3);
        });
      });

      it("calls makeInactive", function() {
        sinon.spy(subject, "makeInactive");
        subject.handleReadingStageChoice({currentTarget: {innerHTML: "3"}});
        expect(subject.makeInactive).to.have.been.called;
      });

      it("calls makeActive", function() {
        sinon.spy(subject, "makeActive");
        subject.handleReadingStageChoice({currentTarget: {innerHTML: "3"}});
        expect(subject.makeActive).to.have.been.called;
      });

      it("calls new App.Models.UserReadingStages", function() {
        sinon.stub(App, "newISODate").returns("a date");
        subject.isInitialReadingStage = false;
        subject.handleReadingStageChoice({currentTarget: {innerHTML: "3"}});

        expect(App.Models.UserReadingStages).to.have.been.calledWith({
          student_id: App.selectedStudent.get("id"),
          assessor_id: App.currentTeacher.id,
          reading_stage: 3,
          context: "teacher_notepad",
          initial: false,
          changed_at: App.newISODate()

        });
        var model = App.userReadingStages.where({changed_at: "a date"});
        // expect(subject.).to

        App.newISODate.restore();
      });

      xit("calls save on the model", function() {
        // TODO
      });

      it("calls render", function() {
        sinon.spy(subject, "render");
        subject.handleReadingStageChoice({currentTarget: {innerHTML: "3"}});
        expect(subject.render).to.have.been.called;
      });
    });
  });

  describe("helper functions", function() {
    it("#makeActive", function() {
      subject.render();
      subject.makeInactive();
      subject.makeActive(5);
      expect($("#applicationContainer .reading-stage__choice.st-selected")[0].innerHTML).to.equal("5");
    });

    it("makeInactive", function() {
      subject.render();
      subject.makeInactive();
      subject.makeActive(5);
      expect($("#applicationContainer .reading-stage__choice.st-selected")[0].innerHTML).to.equal("5");
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
