describe('App.Collections.Conferences', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.Conferences();
  });

  it("has a conference model", function() {
    expect(new subject.model()).to.be.an.instanceof(App.Models.Conference);
  });

  xit("#parse", function() {

  });

});

