describe('App.Views.StageStimulusOnsetRimesWords', function() {
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
    appendFixture("div", { class: "js-stageStimulus" });
    subject = new App.Views.StageStimulusOnsetRimesWords({el: '.js-stageStimulus'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("#render", function() {
    App.selectedStudent.set({ displayedReadingStage: 2 });
    subject.render({value: "b"});
    expect(subject.$el).not.to.be.empty;
  });
});
