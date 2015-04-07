describe('App.Collections.Stimuli', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Collections.Stimuli({localStorageName: "words"});
  });

  it("has a stimulus model", function() {
    expect(new subject.model()).to.be.an.instanceof(App.Models.Stimulus);
  });

  it("has a local storage", function() {
    expect(subject.localStorage).to.be.an.instanceof(Backbone.LocalStorage);
  });
});

