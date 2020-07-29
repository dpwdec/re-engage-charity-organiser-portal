describe("Testing login functionality with wrong admin datas", () => {
  beforeEach(() => {
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });
    
    cy.visit("admin/login");
  });

  it("can not log in with wrong admin name", () => {
    cy.get("#admin").type("admin1");
    cy.get("#password").type("1234");
    cy.on('window:alert', (str) => {
      expect(str).to.equal("There is no record of this admin in the database.")
    });
    cy.get("#login").click();
  });

  it("can not log in with wrong password", () => {
    cy.get("#admin").type("admin");
    cy.get("#password").type("12345");
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Wrong password")
    });
    cy.get("#login").click();
  });
});