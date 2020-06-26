describe("DriverAvailability", () => {
  beforeEach(function () {
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("displays all drivers availability", () => {
    // Simplest test created to check the controller logic
    cy.visit("/");
    cy.get(".driver-availability-table").should("contain", "Tom");
    cy.get(".driver-availability-table").should("not.contain", "Cath");
    cy.get(".driver-availability-table").should("not.contain", "Tim");

    cy.get(".driver-availability-table").should("contain", "July-2020");
    cy.get(".driver-availability-table").should("contain", "true");
  });
});
