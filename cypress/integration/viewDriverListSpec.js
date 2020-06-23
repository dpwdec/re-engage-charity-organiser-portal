describe('Members', () => {
  it('displays all drivers names and addresses', () => {
    cy.visit('localhost:3000/');
    cy.get('.driver-list').should('contain', 'Harry Potter SE3 5JP');
    cy.get('.driver-list').should('contain', 'Neville Longbottom N8 4YX');
  });
});