describe('App.Views.EditStudentNote', function() {
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
    appendFixture("div", {class: "js-editStudentNotes"});
    subject = new App.Views.EditStudentNote({model: new App.Models.Note({updated_at: "2015-05-27T14:34:28.712Z", content: "new012345678901234567890123456789012345678901234567890123456789"}), el: '.js-editStudentNotes'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("has a tag name", function() {
    expect(subject.tagName).to.equal("li");
  });

  it("has events", function() {
    expect(subject.events.click).to.equal("handleClick");
  });

  it("calls listen from initialize", function() {
    sinon.spy(subject, "listen");
    subject.initialize();
    expect(subject.listen).to.have.been.called;
  });

  it("#listen", function() {
    sinon.spy(subject, "listenTo");
    subject.listen();
    expect(subject.listenTo).to.have.been.calledWith(subject.model, 'change', subject.render);
  });

  it("#render", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function() {
    expect(subject.templateJSON().updatedDate).to.equal("May 27, 2015");
    expect(subject.templateJSON().shortContent).to.equal("new0123456789012345678901234567890123456...");
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("#makeActive", function() {
    subject.render();
    subject.makeActive();
    expect(subject.$el).to.have.class("st-selected");
  });

  it("#makeInactive", function() {
    subject.render();
    subject.makeActive();
    expect(subject.$el).to.have.class("st-selected");
    subject.makeInactive();
    expect(subject.$el).not.to.have.class("st-selected");
  });

  it("#handleClick", function() {
    sinon.spy(App.Dispatcher, "trigger");
    subject.handleClick();
    expect(App.Dispatcher.trigger).to.have.been.calledWith("editStudentNoteSelected", subject);
    App.Dispatcher.trigger.restore();
  });
});
