describe('App.login', function() {
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };
  });

  it("sets the current user", function() {
    var responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
    App.login.setCurrentUser(responseData);
    expect(App.currentUser.firstname).to.equal("Cool");
    expect(App.currentUser.lastname).to.equal("Person");
    expect(App.currentUser.token).to.equal("abc123");
  });

  describe("cacheElements", function() {

    beforeEach(function() {
      App.login.initialize();
    });

    it("saves a reference to the email field", function() {
      expect(App.login.$email).to.exist;
      expect(App.login.$email).to.have.id("email-field");
    });

    it("saves a reference to the password field", function() {
      expect(App.login.$password).to.exist;
      expect(App.login.$password).to.have.id("password-field");
    });

    it("saves a reference to the submit button", function() {
      expect(App.login.$submit).to.exist;
      expect(App.login.$submit).to.have.id("submit");
    });
  });

  describe("registerEvents", function() {
    afterEach(function() {
      App.login.loginUser.restore();
    });

    it("registers the submit click event", function() {
      appendFixture("input", { id: "submit", type: "button"});
      App.login.cacheElements();
      sinon.stub(App.login, "loginUser");
      App.login.registerEvents();
      App.login.$submit.trigger("click");
      expect(App.login.loginUser).to.have.been.called;
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
      App.login.initialize(callback);
    });

    it("calls to the api with proper credentials", function() {
      App.login.loginUser();
      var request = _.first(requests);
      expect(request.method).to.equal("POST");
      expect(request.url).to.equal("https://IFLauthexample-webapp.herokuapp.com/users/sign_in.json");
      expect(request.requestHeaders.Accept).to.match(/application\/json/);
    });

    it("sets the current user on loginSuccess", function() {
      var callback = function() {
        console.log("Success");
      };
      App.login.initialize(callback);
      var responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
      App.login.loginSuccess(responseData);
      expect(App.currentUser).to.equal(responseData);
      expect(App.currentUser.firstname).to.equal("Cool");
      expect(App.currentUser.lastname).to.equal("Person");
      expect(App.currentUser.token).to.equal("abc123");
    });

    it("it does not set the current user on login failure", function() {
      App.login.loginUser();
      expect(App.login.currentUser).to.be.nil;
    });
  });
});
