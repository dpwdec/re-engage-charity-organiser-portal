describe("DriverAvailability", () => {
  beforeEach(function () {
<<<<<<< HEAD
    cy.task("dropAdmins");
    cy.task("addAdmin", { adminName: "admin", password: "1234" });
=======
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    cy.task('dropMembers');
    cy.task('addMember', {name: 'Cat', role: 'driver', availability: { "Jul 2020": false, "Aug 2020": false, "Sep 2020": true }})
    cy.task('addMember', {name: 'Merija', role: 'guest', availability: { "Jul 2020": true, "Aug 2020": true, "Sep 2020": true }})
>>>>>>> d20ba357e074e90ac84c16810f069cb4ece05e4e

    cy.task("dropMembers");
    cy.task("addMember", {
      name: "Cat",
      role: "driver",
      availability: {
        "Jun 2020": false,
        "Jul 2020": false,
        "Aug 2020": false,
        "Sep 2020": true,
      },
    });
    cy.task("addMember", {
      name: "Merija",
      role: "guest",
      availability: { "Jul 2020": true, "Aug 2020": true, "Sep 2020": true },
    });

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("displays all drivers availability", () => {
    // Simplest test created to check the controller logic
    cy.visit("/");
<<<<<<< HEAD
    cy.contains("Cat")
      .parents("tr")
      .within(() => {
        cy.get("td").eq(1).contains("false");
        cy.get("td").eq(2).contains("false");
        cy.get("td").eq(3).contains("false");
        cy.get("td").eq(4).contains("true");
      });

    cy.contains("Merija")
      .parents("tr")
      .within(() => {
        cy.get("td").eq(1).contains("undecided");
        cy.get("td").eq(2).contains("true");
        cy.get("td").eq(3).contains("true");
        cy.get("td").eq(4).contains("true");
      });
=======
    cy.contains('Cat').parents('tr').within(() => {
      cy.get('td').eq(1).contains('False');
      cy.get('td').eq(2).contains('False');
      cy.get('td').eq(3).contains('True');
      cy.get('td').eq(4).contains('TBD');
    })

    cy.contains('Merija').parents('tr').within(() => {
      cy.get('td').eq(1).contains('True');
      cy.get('td').eq(2).contains('True');
      cy.get('td').eq(3).contains('True');
      cy.get('td').eq(4).contains('TBD');
    })
>>>>>>> d20ba357e074e90ac84c16810f069cb4ece05e4e

    cy.get("#logout").click();
  });
});
