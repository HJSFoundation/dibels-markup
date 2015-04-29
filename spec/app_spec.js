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
  });

  afterEach(function() {
    _.bindAll.restore();
  });

  it("creates test data", function() {

    this.timeout(0);
    App.initialize();

    expect(App.students).to.exist;
  });
});
