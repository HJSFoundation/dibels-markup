describe('App.Login', function() {
  var subject;
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };

    subject = new App.Login();
  });

  it("sets the current user", function() {
    var responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
    subject.setCurrentUser(responseData);
    expect(App.currentUser.firstname).to.equal("Cool");
    expect(App.currentUser.lastname).to.equal("Person");
    expect(App.currentUser.token).to.equal("abc123");
  });

  describe("cacheElements", function() {

    beforeEach(function() {
      subject.initialize();
    });

    it("saves a reference to the email field", function() {
      expect(subject.$email).to.exist;
      expect(subject.$email).to.have.id("email-field");
    });

    it("saves a reference to the password field", function() {
      expect(subject.$password).to.exist;
      expect(subject.$password).to.have.id("password-field");
    });

    it("saves a reference to the submit button", function() {
      expect(subject.$submit).to.exist;
      expect(subject.$submit).to.have.id("submit");
    });
  });

  describe("registerEvents", function() {
    afterEach(function() {
      subject.loginUser.restore();
    });

    it("registers the submit click event", function() {
      appendFixture("input", { id: "submit", type: "button"});
      subject.cacheElements();
      sinon.stub(subject, "loginUser");
      subject.registerEvents();
      subject.$submit.trigger("click");
      expect(subject.loginUser).to.have.been.called;
    });
  });

  describe("LoginUser", function() {
    beforeEach(function() {
      appendFixture("input", { id: "submit", type: "button"});
      appendFixture("input", { id: "email-field", type: "text", name: "email", value: "dev@App.org"});
      appendFixture("input", { id: "password-field", type: "password", name: "password", value: "1234"});
      var callback = function() {
         console.log("Success");
      };
      subject.initialize(callback);
    });

    it("calls to the api with proper credentials", function() {
      subject.loginUser();
      var request = _.first(requests);
      expect(request.method).to.equal("POST");
      // expect(request.url).to.equal("https://IFLauthexample-webapp.herokuapp.com/users/sign_in.json");
      expect(request.requestHeaders.Accept).to.match(/application\/json/);
    });

    it("sets the current user on loginSuccess", function() {
      var callback = function() {
        console.log("Success");
      };
      subject.initialize(callback);
      var responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
      subject.loginSuccess(responseData);
      expect(App.currentUser).to.equal(responseData);
      expect(App.currentUser.firstname).to.equal("Cool");
      expect(App.currentUser.lastname).to.equal("Person");
      expect(App.currentUser.token).to.equal("abc123");
    });

    it("it does not set the current user on login failure", function() {
      subject.loginUser();
      expect(App.currentUser).to.be.nil;
    });
  });
});
