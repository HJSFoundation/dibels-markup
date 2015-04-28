describe('App.Views.GroupManagement', function() {
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
    subject = new App.Views.GroupManagement({el: '#applicationContainer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("handles a click event", function() {
    expect(subject.events.click).to.equal("handleClick");
  });

  it("calls render on initialize", function() {
    sinon.spy(subject, "render");
    subject.initialize();
    expect(subject.render).to.have.been.called;
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#handleClick", function() {
    subject.handleClick();
    expect(subject.teacherWorkspace).to.be.an.instanceOf(App.Views.TeacherWorkspace);
  });
});
