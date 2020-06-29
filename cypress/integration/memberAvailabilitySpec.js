describe("DriverAvailability", () => {
  beforeEach(function () {
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    cy.task('dropMembers');
    cy.task('addMember', {name: 'Cat', role: 'driver', availability: { "Jun 2020": true, "Jul 2020": false, "Aug 2020": false, "Sep 2020": true }})
    cy.task('addMember', {name: 'Merija', role: 'guest', availability: { "Jul 2020": true, "Aug 2020": true, "Sep 2020": true }})


    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("displays all drivers availability", () => {
    // Simplest test created to check the controller logic
    cy.visit("/");
    cy.contains('Cat').parents('tr').within(() => {
      cy.get('td').eq(1).contains('true');
      cy.get('td').eq(2).contains('false');
      cy.get('td').eq(3).contains('false');
      cy.get('td').eq(4).contains('true');
    })

    cy.contains('Merija').parents('tr').within(() => {
      cy.get('td').eq(1).contains('undecided');
      cy.get('td').eq(2).contains('true');
      cy.get('td').eq(3).contains('true');
      cy.get('td').eq(4).contains('true');
    })
    // cy.get(".driver-availability-table").should("contain", "Tom");
    // cy.get(".driver-availability-table").should("not.contain", "Cath");
    // cy.get(".driver-availability-table").should("not.contain", "Tim");

    // cy.get(".driver-availability-table").should("contain", "July-2020");
    // cy.get(".driver-availability-table").should("contain", "true");
  });
});
