describe('App.Views.Matrix', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-matrix" });
    subject = new App.Views.Matrix({el: '.js-matrix'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("initialize", function() {
    it("calls render on initialize", function() {
      expect(subject.$el).not.to.be.empty;
    });

    it("creates a matrix menu view", function() {
      expect(subject.matrixMenuView).not.to.be.undefined;
    });

    it("creates a stimuli tiles view letters", function() {
      expect(subject.stimuliTilesViewLetters).to.be.an.instanceOf(App.Views.StimuliTilesLetters);
    });

    it("creates a stimuli tiles view words", function() {
      expect(subject.stimuliTilesViewWords).to.be.an.instanceOf(App.Views.StimuliTilesSightWords);
    });

    it("creates a stimuli tiles view onset rime", function() {
      expect(subject.stimuliTilesViewOnsetRime).to.be.an.instanceOf(App.Views.StimuliTilesOnsetRime);
    });

    it("creates a stimuli tiles view stories", function() {
      expect(subject.stimuliTilesViewStories).to.be.an.instanceOf(App.Views.StimuliTilesStories);
    });

    it("creates a student selector view", function() {
      expect(subject.matrixStudentSelectorView).not.to.be.undefined;
    });
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#listen", function (){
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(App.Dispatcher, "closeMatrix", subject.handleCloseMatrix);
  });

  it("#handleCloseMatrix", function(){
    subject.handleCloseMatrix();
    expect(subject.$el).to.have.class("animated slideOutDown");
  });

});
