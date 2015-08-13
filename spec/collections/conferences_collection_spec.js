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
    var clock = sinon.useFakeTimers(moment.utc([2015,5,30]).valueOf());

    var model = new App.Models.Conference({
      last_conference_session_at: "2015-06-30T00:00:00.000Z",
      number_per_week: 5
    });

    expect(subject.comparator(model)).to.equal(120960000);

    clock.restore();
  });

  it("#parse", function() {
    var resp = {
      "conferences": [
        {
          "id": 76,
          "name": "Edwina Beier",
          "conference_type": "user",
          "weight": 5,
          "number_per_week": 3,
          "last_conference_session_at": "2015-05-28T20:50:29.050Z",
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


  it("sets the url", function() {
    expect(subject.url()).to.equal(App.url() + "/classrooms/" + App.currentTeacher.classroom_id + "/conferences");
  });
});
