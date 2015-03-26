function renderFixture(nodeType, attrs, content) {

  var attributes = _.reduce(attrs, function(memo, value, attr) {
    return memo += " " + attr + '="' + value + '"';
  }, "");

  return [
    "<", nodeType,
    attributes,
    ">",
    content,
    "</" + nodeType + ">"
  ].join("");
}

function appendFixture(nodeType, attrs, content) {
  $("#applicationContainer").append(renderFixture(nodeType, attrs, content));
}

window.expect = chai.expect;

beforeEach(function() {
  $("body").append("<div id='applicationContainer'/>");
  // new App.Views.ApplicationView({ el: "#applicationContainer" });
});

afterEach(function() {
  $("#applicationContainer").remove();
});
