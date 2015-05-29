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

    subject = new App.Models.Student({first_name: "Bernie", last_name: "Bivins", reading_stage: 3});
  });

  describe("methods", function() {
    it("#shortName", function() {
      expect(subject.shortName()).to.equal("BERNIE B.");
    });

    it("#readingStage", function() {
      expect(subject.readingStage()).to.equal(3);
    });
  });
});
