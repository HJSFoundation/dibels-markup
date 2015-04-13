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
    var m = new Backbone.Model({stimulus: "a", skill: "Letters"});
    subject = new App.Views.Tile({model: m, el: '.js-tile'});
  });

  it("has a reference to the element", function() {
    expect(subject.$el).to.exist;
  });

  it("has a template", function() {
    expect(subject.template()).to.exist;
  });

  describe("events", function() {
    it("handles the click event", function(){
      expect(subject.events.click).to.equal('handleClick');
    });
  }); 

  it("renders", function() {
    subject.render();
    expect(subject.$el).not.to.be.empty;
  });

  it("#templateJSON", function(){
    expect(subject.templateJSON().index).to.equal(subject.index);
    expect(subject.templateJSON().stimulus).to.equal(subject.model.get("stimulus"));
  }) 

  describe("handlers", function() {

    afterEach(function() {
      App.Dispatcher.trigger.restore();
    });

    it("#handleClick", function() {
      sinon.spy(App.Dispatcher, "trigger");
      subject.handleClick();
      expect(App.Dispatcher.trigger).to.have.been.calledWith("StimulusChangeRequested:"+subject.model.get("skill"), {stimulus: subject.model.get("stimulus")});
    });
  });


});
