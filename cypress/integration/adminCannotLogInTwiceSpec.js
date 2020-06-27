describe("Admin cannot log in again from log in page if already logged in", () => {
  beforeEach(() => {
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("shows that once you logged in admin can not see login page", () => {
    cy.visit("admin/login");
    cy.url().should("include", "/admin/login");
    cy.get("p").contains("log out first");
    cy.get("#home").click();
  });

  afterEach(() => {
    cy.get("#logout").click();
  });

});