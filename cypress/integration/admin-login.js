describe("Testing login functionality with correct admin datas", () => {
  beforeEach(() => {
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  afterEach(() => {
    cy.get("#logout").click();
  });

  it("shows successfully login", () => {
    cy.url().should("include", "/");
  });

  it("shows that once you logged in admin can not see login page", () => {
    cy.visit("admin/login");
    cy.url().should("include", "/admin/login");
    cy.get("p").contains("log out first");
    cy.get("#home").click();
  });
});

describe("Testing login functionality with wrong admin datas", () => {
  beforeEach(() => {
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
    cy.url().should("include", "/admin/login");
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
    cy.url().should("include", "/admin/login");
  });
});

describe("Testing go to home page without login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("sends admin back to login page", () => {
    cy.url().should("include", "/admin/login");
  });
});

describe("Testing logout functionality", () => {
  beforeEach(() => {
    cy.visit("/admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("shows successfully logout", () => {
    cy.get("#logout").click();
    cy.url().should("include", "/admin/login");
  });
});
