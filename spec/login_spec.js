describe('IFL.Login', function() {
  var xhr;
  var requests;

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function(xhr) {
      requests.push(xhr);
    };
  });

  describe("setting urls", function() {
    it("sets a production url", function() {
      IFL.Login.setProductionUrl();
      expect(IFL.Login.productionApiUrl).to.equal('https://IFLauthexample-webapp.herokuapp.com');
    });

    it("sets a development url", function() {
      IFL.Login.setDevelopmentUrl();
      expect(IFL.Login.developmentApiUrl).to.equal('http://localhost:3000');
    });
  });

  it("sets the current user", function() {
    var responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
    IFL.Login.setCurrentUser(responseData);
    expect(IFL.currentUser.firstname).to.equal("Cool");
    expect(IFL.currentUser.lastname).to.equal("Person");
    expect(IFL.currentUser.token).to.equal("abc123");
  });

  describe("cacheElements", function() {

    beforeEach(function() {
      appendFixture("div", { id: "loginContainer"});
      appendFixture("input", { id: "email-field", type: "text", name: "email"});
      appendFixture("input", { id: "password-field", type: "password", name: "password"});
      appendFixture("input", { id: "submit", type: "button"});
      appendFixture("div", { id: "gameContainer"});
      IFL.Login.cacheElements();
    });

    it("saves a reference to the login container", function() {
      expect(IFL.Login.$loginContainer).to.exist;
      expect(IFL.Login.$loginContainer).to.have.id("loginContainer");
    });

    it("saves a reference to the email field", function() {
      expect(IFL.Login.$email).to.exist;
      expect(IFL.Login.$email).to.have.id("email-field");
    });

    it("saves a reference to the password field", function() {
      expect(IFL.Login.$password).to.exist;
      expect(IFL.Login.$password).to.have.id("password-field");
    });

    it("saves a reference to the submit button", function() {
      expect(IFL.Login.$submit).to.exist;
      expect(IFL.Login.$submit).to.have.id("submit");
    });

    it("saves a reference to the game container", function() {
      expect(IFL.Login.$gameContainer).to.exist;
      expect(IFL.Login.$gameContainer).to.have.id("gameContainer");
    });
  });

  describe("registerEvents", function() {
    afterEach(function() {
      IFL.Login.loginUser.restore();
    });

    it("registers the submit click event", function() {
      appendFixture("input", { id: "submit", type: "button"});
      IFL.Login.cacheElements();
      sinon.stub(IFL.Login, "loginUser");
      IFL.Login.registerEvents();
      IFL.Login.$submit.trigger("click");
      expect(IFL.Login.loginUser).to.have.been.called;
    });
  });

  describe("LoginUser", function() {
    beforeEach(function() {
      appendFixture("input", { id: "submit", type: "button"});
      appendFixture("input", { id: "email-field", type: "text", name: "email", value: "dev@IFL.org"});
      appendFixture("input", { id: "password-field", type: "password", name: "password", value: "1234"});
      var callback = function() {
         console.log("Success");
      };
      IFL.Login.initialize(callback);
    });

    it("calls to the api with proper credentials", function() {
      IFL.Login.loginUser();
      var request = _.first(requests);
      expect(request.method).to.equal("POST");
      expect(request.url).to.equal("https://IFLauthexample-webapp.herokuapp.com/users/sign_in.json");
      expect(request.requestHeaders.Accept).to.match(/application\/json/);
    });

    it("sets the current user on loginSuccess", function() {
      var callback = function() {
        console.log("Success");
      };
      IFL.Login.initialize(callback);
      var responseData = { firstname:"Cool", lastname: "Person", token: "abc123"};
      IFL.Login.loginSuccess(responseData);
      expect(IFL.currentUser).to.equal(responseData);
      expect(IFL.currentUser.firstname).to.equal("Cool");
      expect(IFL.currentUser.lastname).to.equal("Person");
      expect(IFL.currentUser.token).to.equal("abc123");
    });

    it("it does not set the current user on login failure", function() {
      IFL.Login.loginUser();
      expect(IFL.Login.currentUser).to.be.nil;
    });
  });
});
