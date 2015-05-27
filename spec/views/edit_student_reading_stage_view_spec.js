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

    subject = new App.Views.EditStudentReadingStage({el: '.js-editStudentReadingStage'});
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("has a click event", function() {
    expect(subject.events["click .reading-stage__choice"]).to.equal("handleReadingStageChoice");
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleReadingStageChoice", function() {
    App.selectedStudent.set({reading_stage: 5});
    subject.handleReadingStageChoice({currentTarget: {innerText: "2"}});
    expect(App.selectedStudent.get("reading_stage")).to.equal(2);
  });

});
