describe('App.Views.TeacherWorkspace', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Views.TeacherWorkspace({el: '#applicationContainer'});
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

    it("creates a stage view", function() {
      expect(subject.stageView).not.to.be.undefined;
    });

    it("creates a matrix view", function() {
      expect(subject.matrixView).not.to.be.undefined;
    });
  });

  it("renders", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });
});
