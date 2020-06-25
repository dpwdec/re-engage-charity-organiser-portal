describe('Members', () => {
  it('displays all drivers names and addresses', () => {
    cy.visit('/');
    cy.get('.driver-list').should('contain', 'Cat');
    cy.get('.driver-list').should('contain', 'Marija');
    cy.get('.driver-list').should('not.contain', 'Dec');
  });
});
