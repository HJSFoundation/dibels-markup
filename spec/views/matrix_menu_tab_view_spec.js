describe('App.Views.MatrixMenuTab', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };
    var options = {
        tagName: "a", 
        className:  "menu--tab grid-cell", 
        label: "STORIES"
      };
    appendFixture("div", { class: options.className });
    subject = new App.Views.MatrixMenuTab(options);
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

});

