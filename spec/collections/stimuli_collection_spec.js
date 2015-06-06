describe('App.Collections.Stimuli', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.Stimuli();
  });

  xit("#parse", function  () {
    // body...
  });

  it("has a stimulus model", function() {
    expect(new subject.model()).to.be.an.instanceof(App.Models.Stimulus);
  });
});
