describe('Members', () => {

  beforeEach(() => {
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it('displays all drivers names and addresses', () => {
    cy.visit('/');
    cy.get('.driver-list').should('contain', 'Cat');
    cy.get('.driver-list').should('contain', 'Marija');
    cy.get('.driver-list').should('not.contain', 'Dec');
  });

  afterEach(() => {
    cy.visit('/')
    cy.get("#logout").click();
  });
});
