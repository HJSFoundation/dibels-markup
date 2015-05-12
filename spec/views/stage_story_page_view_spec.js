describe('App.Views.StageStoryPage', function() {
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
    subject = new App.Views.StageStoryPage({el: '.js-storyOverlay'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles the click event", function() {
      expect(subject.events.click).to.equal('removeView');
    });
  });

  it("initialize calls listen", function() {
    subject.listen = sinon.spy();
    subject.initialize();
    expect(subject.listen).to.have.been.called;
  });

  describe("#render", function() {
    beforeEach(function() {
      subject.render();
    });

    it("renders", function() {
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a story page image flip button view", function() {
      expect(subject.storyButtonFlipView).to.be.an.instanceOf(App.Views.ButtonFlip);
    });
  });

  it("#removeView", function() {
    subject.render();
    subject.removeView();
    expect(subject.$el).to.be.empty;
  });

  describe("#listen", function() {
    it("listens for stimulus change request for stageStories", function() {
      subject.listenTo = sinon.spy();
      subject.listen();
      expect(subject.listenTo).to.be.calledWith(App.Dispatcher, "StimulusChangeRequested:"+App.Config.skill.stageStories, subject.handleStoryChangeRequest);
    });

    it("listens for flip story button tapped", function() {
      subject.listenTo = sinon.spy();
      subject.listen();
      expect(subject.listenTo).to.be.calledWith(App.Dispatcher, "flipStoryButtonTapped", subject.handleFlipStoryRequest);
    });
  });

  describe("handlers", function() {
    it("#handleStoryChangeRequest", function() {

      App.selectedStudent = new App.Models.Student({id:1, first_name:"StageStoryPage:handleStoryChangeRequest", last_name: "C", reading_stage: 5});

      sinon.spy(subject, "render");
      subject.handleStoryChangeRequest({id:"1"});
      expect(subject.render).to.have.been.called;
    });

    describe("#handleFlipStoryRequest", function() {
      beforeEach(function() {
        appendFixture("div", { class: "js-storyFlip" });
        appendFixture("div", { class: "js-storyTextTeacher" });
      });

      it("handles flip story request from the flipped state", function() {
        subject.flipped=true;
        subject.handleFlipStoryRequest();
        expect(subject.flipped).to.equal(false);
        expect($(subject.storyStimulusEl)).to.have.class("st-unflipped");
        expect($(subject.storyStimulusEl)).not.to.have.class("st-flipped");
        expect($(".js-storyTextTeacher")).to.be.hidden;

      });

      it("handles flip story request from the unflipped state", function() {
        subject.flipped=false;
        subject.handleFlipStoryRequest();
        expect(subject.flipped).to.equal(true);
        expect($(subject.storyStimulusEl)).to.have.class("st-flipped");
        expect($(subject.storyStimulusEl)).not.to.have.class("st-unflipped");
        expect($(".js-storyTextTeacher")).not.to.be.hidden;
      });
    });
  });
});
