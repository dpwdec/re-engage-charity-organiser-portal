describe("DriverAvailability", () => {
  beforeEach(() => {
    cy.task("dropAdmins");
    cy.task("addAdmin", { adminName: "admin", password: "1234" });
    cy.task("dropMembers");
    cy.task("addMember", {
      name: "Cat",
      role: "driver",
      availability: {
        "Jul 2020": false,
      },
    });
    cy.task("addMember", {
      name: "Merija",
      role: "guest",
      availability: { 
        "Jul 2020": true, 
      },
    });

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("displays all drivers availability", () => {
    // Simplest test created to check the controller logic
    cy.visit("/");
    cy.contains("Cat")
      .parents(".available")
      .within(() => {
        cy.get("option").eq(1).contains("False");
      });

    cy.contains("Merija")
      .parents(".available")
      .within(() => {
        cy.get("option").eq(1).contains("False");
      });

    cy.get("#logout").click();
  });
});
