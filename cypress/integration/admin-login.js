describe("Admin login page", () => {
  it("shows successfully login", () => {
    cy.visit("/");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });
});
