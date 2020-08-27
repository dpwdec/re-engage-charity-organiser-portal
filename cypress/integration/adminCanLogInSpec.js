describe("Admin can log in with correct data", () => {
  it("Reaches homepage successfully after log in", () => {
    // Arrange
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    // Act
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();

    // Assert
    cy.url().should("include", "/");
    cy.get("#logout").click();
  });
});







