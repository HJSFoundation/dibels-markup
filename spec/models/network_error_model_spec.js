describe('App.Models.NetworkError', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.NetworkError();
  });

  it("#urlRoot", function() {
    expect(subject.urlRoot()).to.equal(App.url() + "/client_errors");
  });

  it("#local", function() {
    App.Config.storageLocalState = false;
    expect(subject.local()).to.equal(false);
    App.Config.storageLocalState = true;
    expect(subject.local()).to.equal(true);
  });
});
