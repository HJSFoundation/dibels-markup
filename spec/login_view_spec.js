// describe('App.Views.Login', function() {
//   var subject;
//   var xhr;
//   var requests;

//   beforeEach(function() {
//     xhr = sinon.useFakeXMLHttpRequest();
//     requests = [];
//     xhr.onCreate = function(xhr) {
//       requests.push(xhr);
//     };

//     subject = new App.Views.Login({el: '#applicationContainer'});
//   });

//   it("has a reference to the element", function() {
//     expect(subject.$el).to.exist;
//   });

//   it("has a template", function() {
//     expect(subject.template()).to.exist;
//   });

//   describe("events", function() {
//     it("has a login success event", function() {
//       expect(subject.events["click #submit"]).to.equal("handleLoginSuccess");
//     });
//   });

//   it("calls render on initialize", function() {
//     subject.initialize();
//     expect(subject.$el).not.to.be.empty;
//   });

//   it("renders", function() {
//     subject.render();
//     expect(subject.$el).not.to.be.empty;
//   });

//   it("handles login success", function() {
//     loginSuccessSpy = sinon.spy();
//     App.Dispatcher.on('loginSuccess', loginSuccessSpy);
//     subject.handleLoginSuccess();
//     expect(loginSuccessSpy).to.have.been.called;


        // sinon.spy(App.Dispatcher, "trigger");
        // subject.handleLoginSuccess();
        // expect(App.Dispatcher.trigger).to.have.been.calledWith("loginSuccess");
//   });
// });
