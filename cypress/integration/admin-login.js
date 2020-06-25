describe("Testing login functionality with correct admin datas", () => {
  beforeEach(function () {
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  afterEach(function () {
    cy.get("#logout").click();
  });

  it("shows successfully login", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("shows that once you logged in admin can not see login page", () => {
    cy.visit("admin/login");
    cy.url().should("eq", "http://localhost:3000/admin/login");
    cy.get("p").contains("log out first");
    cy.get("#home").click();
  });
});

describe("Testing login functionality with wrong admin datas", () => {
  beforeEach(function () {
    cy.visit("admin/login");
  });

  it("can not log in with wrong admin name", () => {
    cy.get("#admin").type("admin1");
    cy.get("#password").type("1234");
    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#login")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "There is no admin with that adminName"
        );
      });
    cy.url().should("eq", "http://localhost:3000/admin/login");
  });
  it("can not log in with wrong password", () => {
    cy.get("#admin").type("admin");
    cy.get("#password").type("12345");
    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#login")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Wrong password");
      });
    cy.url().should("eq", "http://localhost:3000/admin/login");
  });
});

describe("Testing go to home page without login", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("sends admin back to login page", () => {
    cy.url().should("eq", "http://localhost:3000/admin/login");
  });
});

describe("Testing logout functionality", () => {
  beforeEach(function () {
    cy.visit("/admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("shows successfully logout", () => {
    cy.get("#logout").click();
    cy.url().should("eq", "http://localhost:3000/admin/login");
  });
});
