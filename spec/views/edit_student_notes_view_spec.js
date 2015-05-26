describe('App.Views.EditStudentNotesView', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Views.EditStudentNotesView({el: '.js-editStudentNotes'});
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function() {
    expect(subject.templateJSON().notes).to.be.instanceof(Array);
  });

});
