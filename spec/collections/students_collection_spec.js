describe('App.Collections.Students', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.Students();
  });

  it("has a student model", function() {
    expect(new subject.model()).to.be.an.instanceof(App.Models.Student);
  });

  xit("#parse", function() {
    
  });

});

