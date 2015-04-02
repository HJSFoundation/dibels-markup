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

    appendFixture("div", { class: "js-storyPage" });
    subject = new App.Views.StoryPage({el: '.js-storyPage'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles the click event", function(){
      expect(subject.events.click).to.equal('remove');
    });
  });

  describe("initialize", function() {
    it("calls render on initialize", function() {
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a story page image view", function() {
      expect(subject.storyImageView).not.to.be.undefined;
    });

    it("creates a story page menu assessment view", function() {
      expect(subject.storyMenuAssessmentView).not.to.be.undefined;
    });

    it("creates a story page image flip button view", function() {
      expect(subject.storyButtonFlipView).not.to.be.undefined;
    });
  });

  it("renders", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });
});
