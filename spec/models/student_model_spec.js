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

    subject = new App.Models.Student({first_name: "Bernie", last_name: "Bivins", reading_stage: 3, reading_stage_updated_at: new Date()});
  });

  describe("methods", function() {
    it("#shortName", function() {
      expect(subject.shortName()).to.equal("BERNIE B.");
    });

    it("#readingStage", function() {
      expect(subject.readingStage()).to.equal(3);
    });

    it("#daysOnCurrentReadingStage", function() {
      expect(subject.daysOnCurrentReadingStage()).to.equal(0)
    });
  });
});
