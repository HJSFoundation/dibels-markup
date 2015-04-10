describe('App.Views.Tile', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    appendFixture("div", { class: "js-tile" });
    var m = new Backbone.Model({stimulus: "a"});
    subject = new App.Views.Tile({model: m, el: '.js-tile'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  xit("calls render on initialize", function() {
    expect(subject.$el).not.to.be.empty;
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });
});
