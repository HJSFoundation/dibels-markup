describe('App.Models.Conference', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.Conference();
  });

  it("sets the urlRoot", function() {
    expect(subject.urlRoot()).to.equal(App.url +"/conferences");
  });
});
