describe('App.Views.MatrixStudentSelector', function() {
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
    appendFixture("div", { class: "js-matrixStudentSelector" });
    App.selectedStudent = new App.Models.Student({id:1, first_name:"jobe", last_name: "C", reading_stage: 5});
    subject = new App.Views.MatrixStudentSelector({el: '.js-matrixStudentSelector'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
    it("calls render", function() {
      sinon.spy(subject, "render");
      subject.initialize();
      expect(subject.render).to.have.been.called;
    });

    it("calls listen", function() {
      sinon.spy(subject, "listen");
      subject.initialize();
      expect(subject.listen).to.have.been.called;
    });

    it("triggers matrixStudentSelectorTabActiveRequest", function() {
      sinon.spy(App.Dispatcher, "trigger");
      App.students = new App.Collections.Students();
      App.students.add(App.selectedStudent);
      subject.initialize();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("matrixStudentSelectorTabActiveRequest", 
        {
          current: subject.tabs[App.selectedStudent.get("id")].model,
          previous: null
       });
    });
  });

  describe("#render", function() {
    it("renders", function() {
      subject.render();
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a tab view", function() {
      expect(subject.$el.first()).not.to.be.undefined;
    });
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", subject.handleMatrixStudentSelectorTabActiveRequest);
  });

  describe("dispatcher handlers", function() {
    describe("#handleMatrixStudentSelectorTabActiveRequest", function() {
      beforeEach(function() {
        App.students = new App.Collections.Students();
        App.students.add(App.selectedStudent);
        App.students.add({id:0, first_name:"joe", last_name:"F"});
        App.students.add({id:1, first_name:"joe", last_name:"F"});

        subject.render();
      });

      it("activates the clicked tab", function() {
        sinon.spy(subject.tabs[1], "makeActive");
        var event_payload = {current: {id:1}};
        subject.handleMatrixStudentSelectorTabActiveRequest(event_payload);
        expect(subject.tabs["1"].makeActive).to.have.been.called;
      });

      it("inactivates the non clicked tabs", function() {
        sinon.spy(subject.tabs[1], "makeActive");
        sinon.spy(subject.tabs[0], "makeInactive");

        var event_payload = {current: {id:1}};
        subject.handleMatrixStudentSelectorTabActiveRequest(event_payload);
        expect(subject.tabs[0].makeInactive).to.have.been.called;
      });
    });
  });
});
