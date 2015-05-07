describe('App.Views.MatrixStudentSelectorTab', function() {
  var subject;
  var xhr;
  var requests;


  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-tab" });
    subject = new App.Views.MatrixStudentSelectorTab({
      model: new App.Models.Student({id:1, first_name: "Bernie", last_name: "Bivins", reading_stage: 2}),
      el: '.js-tab'
    });
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("#initialize", function() {
    it("sets label to model shortName", function() {
      expect(subject.label).to.equal("BERNIE B.");
    });

    it("sets the id", function() {
      expect(subject.user_id).to.equal(1);
    });

    it("sets the reading_stage", function() {
      expect(subject.reading_stage).to.equal(2);
    });

    it("sets editStudent", function() {
      expect(subject.editStudent).to.be.an.instanceOf(App.Views.EditStudent);
    });
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  describe("helper functions", function() {
    it("#templateJSON", function() {
      expect(subject.templateJSON().label).to.equal("BERNIE B.");
      expect(subject.templateJSON().reading_stage).to.equal(2);
    });

    it("#makeActive", function() {
      subject.render();
      subject.makeActive();
      expect(subject.$el).to.have.class("st-active");
    });

    it("#makeInactive", function() {
      subject.render();
      subject.makeActive();
      expect(subject.$el).to.have.class("st-active");
      subject.makeInactive();
      expect(subject.$el).not.to.have.class("st-active");
    });
  });

  describe("handlers", function() {
    describe("#handleClick", function() {
      it("sets the selected student", function() {
        subject.handleClick();
        expect(App.selectedStudent.get("id")).to.equal(1);
      });

      it("triggers the matrixStudentSelectorTabActiveRequest event", function() {
        sinon.spy(App.Dispatcher, "trigger");
        var previous = App.selectedStudent = new App.Models.Student({id:1, first_name: "Bernie", last_name: "Bivins", reading_stage: 2});

        subject.handleClick();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("matrixStudentSelectorTabActiveRequest", 
          { current: subject.model, 
            previous: previous
        });
        App.Dispatcher.trigger.restore();
      });

      it("triggers the stageClearRequested if the reading stages do not match", function() {
        App.selectedStudent = new App.Models.Student({id:2, first_name: "Bernie", last_name: "Bivins", reading_stage: 4}),
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleClick();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("StageClearRequested");
        expect(App.Dispatcher.trigger).to.have.been.calledTwice;
        App.Dispatcher.trigger.restore();
      });
    });

    describe("#handleIconClick", function() {
      it("triggers the matrixStudentSelectorTabEditRequest event", function() {
        sinon.spy(App.Dispatcher, "trigger");
        subject.handleIconClick();
        expect(App.Dispatcher.trigger).to.have.been.calledWith("matrixStudentSelectorTabEditRequest", subject);
      });

      it("renders editStudent", function() {
        sinon.spy(subject.editStudent, "render");
        subject.handleIconClick();
        expect(subject.editStudent.render).to.have.been.called;
      });
    });
  });
});
