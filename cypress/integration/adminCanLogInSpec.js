describe("Admin can log in with correct data", () => {
  beforeEach(() => {
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("shows successfully login", () => {
    cy.url().should("include", "/");
    cy.get("#logout").click();
  });
});