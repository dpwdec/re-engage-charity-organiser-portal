describe('Create Driver Form', () => {
  it('Creates a new driver', () => {

    //we will need to add DB drop helper function

    cy.visit('/')
    cy.get('#new-driver-form').find('[id=new-driver-name]').type('Himithy')
    cy.get('#new-driver-form').find('[id=new-driver-address]').type('S3 4KY')
    cy.get('#new-driver-form').submit();

    cy.get('.driver-list').should('contain', 'Himithy');
    cy.get('.driver-list').should('contain', 'S3 4KY');
  });
});