Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Members', () => {

  beforeEach(() => {
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    cy.task('dropMembers');
    cy.task('addMember', {name: 'Cat', role: 'driver', telephone: "020 7219 3000"});
    cy.task('addMember', {name: 'Dec', role: 'guest', telephone: "0300 200 3300"});
    cy.task('addMember', {name: 'Jo', role: 'guest', telephone: "0303 123 7300"});

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it('displays all guests names and addresses', () => {
    cy.visit('/');
    cy.get('#tab-label-3').click()
    cy.get('.guest-list').should('contain', 'Dec');
    cy.get('.guest-list').should('contain', '0300 200 3300');
    cy.get('.guest-list').should('contain', 'Jo');
    cy.get('.guest-list').should('contain', '0303 123 7300');
    cy.get('.guest-list').should('not.contain', 'Cat');
    cy.get('.guest-list').should('not.contain', '020 7219 3000');
  });

  afterEach(() => {
    cy.visit('/')
    cy.get("#logout").click();
  });
});
