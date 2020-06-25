describe('Members', () => {
  it('displays all guests names and addresses', () => {
    cy.visit('/');
    cy.get('.guest-list').should('contain', 'Dec');
    cy.get('.guest-list').should('contain', 'Jo');
    cy.get('.guest-list').should('not.contain', 'Cat');
  });
});
