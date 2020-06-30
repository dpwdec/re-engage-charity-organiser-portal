describe('Members', () => {

  beforeEach(() => {
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    cy.task('dropMembers');
    cy.task('addMember', {name: 'Cat', role: 'driver', id: 1});
    cy.task('addMember', {name: 'Marija', role: 'driver', id: 2});
    cy.task('addMember', {name: 'Dec', role: 'guest', id: 3});

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it('displays all drivers names and addresses', () => {
    cy.visit('/');
    cy.get("#contact-tab").click();
    cy.get('.driver-list').should('contain', 'Cat');
    cy.get('.driver-list').should('contain', 'Marija');
    cy.get('.driver-list').should('not.contain', 'Dec');
  });

  it('deletes driver from driver list component'), () => {
    cy.visit('/');
    cy.get("#contact-tab").click();
    cy.get("#delete-driver-1").click();
    cy.get('.driver-list').should('not.contain', 'Cat');
  }

  afterEach(() => {
    cy.visit('/')
    cy.get("#logout").click();
  });
});
