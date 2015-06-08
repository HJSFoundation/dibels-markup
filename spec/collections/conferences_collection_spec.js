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

  it("has a comparator", function() {
    expect(subject.comparator).to.equal("name");
  });

  it("#parse", function() {
    var resp = {
      "conferences": [
        {
          "id": 76,
          "classroom_id": 91,
          "name": "Edwina Beier",
          "conference_type": "user",
          "weight": 5,
          "number_per_week": 3,
          "last_conference_date": "2015-05-28T20:50:29.050Z",
          "test": false,
          "archived": false,
          "updated_at": "2015-05-28T20:50:29.060Z",
          "created_at": "2015-05-28T20:50:29.060Z",
          "user_ids": [
            8201
          ]
        }
      ]
    };
    expect(subject.parse(resp, xhr)).to.equal(resp.conferences);
  });
});
