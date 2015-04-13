describe('App.Views.StoryPage', function() {
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
    appendFixture("div", { class: "js-storyOverlay" });
    subject = new App.Views.StoryPage({el: '.js-storyOverlay'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
    expect(subject.template).to.equal(App.templates.storyPage);
  });

  describe("events", function() {
    it("handles the click event", function(){
      expect(subject.events.click).to.equal('removeView');
    });
  });

  it("initialize calls listen", function(){
    subject.listen = sinon.spy();
    subject.initialize();
    expect(subject.listen).to.have.been.called;
  });


  describe("render", function() {

    beforeEach(function() {
      subject.render();
    });

    it("renders", function() {
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a story page image view", function() {
      expect(subject.storyImageView).to.be.an.instanceOf(App.Views.StoryImage);
    });

    it("creates a story page menu assessment view", function() {
      expect(subject.storyMenuAssessmentView).to.be.an.instanceOf(App.Views.MenuAssessment);
    });

    it("creates a story page image flip button view", function() {
      expect(subject.storyButtonFlipView).to.be.an.instanceOf(App.Views.ButtonFlip);
    });
  });

  it("#removeView", function(){

    subject.render();
    subject.removeView();
    expect(subject.$el).to.be.empty;
  });

  it("#listen", function(){
    subject.listenTo = sinon.spy();
    subject.listen();
    expect(subject.listenTo).to.be.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stories, subject.handleSkillChangeRequest);
  });


 
});
