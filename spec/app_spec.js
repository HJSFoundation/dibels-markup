describe('App', function() {
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

    subject = new App.Views.Application({el: '#applicationContainer'});
  });

  afterEach(function() {
    _.bindAll.restore();
  });
});
