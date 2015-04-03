describe('App.Models.Student', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Models.Student({firstName: "Bernie", lastName: "Bivins"});
  });

  it("has a default grade", function() {
    expect(subject.defaults.grade).to.equal(1);
  });

  describe("methods", function(){
    it("#shortName", function() {
      expect(subject.shortName()).to.equal("BERNIE B.");
    });
  });
});

