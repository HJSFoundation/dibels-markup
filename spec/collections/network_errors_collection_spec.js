describe('App.Collections.NetworkErrors', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.NetworkErrors();
  });

  it("#url", function() {
    expect(subject.url()).to.equal(App.url() + "/client_errors");
  });
});

