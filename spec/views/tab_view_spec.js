describe('App.Views.Tab', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-tab" });
    subject = new App.Views.Tab({el: '.js-tab'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("calls render on initialize", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });

  it("renders", function() {
    subject.initialize();
    expect(subject.$el).not.to.be.empty;
  });

});

