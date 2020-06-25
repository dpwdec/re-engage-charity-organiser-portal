describe('Create Member Form', () => {
  it('Creates a new member', () => {

    //we will need to add DB drop helper function

    cy.visit('/')
    cy.get('#new-member-form').find('[id=new-member-name]').type('Himithy')
    cy.get('#new-member-form').find('[id=new-member-address]').type('S3 4KY')
    cy.get('#new-member-form').find('[id=new-member-role]').type('driver')
    cy.get('#new-member-form').submit();

    cy.get('.driver-list').should('contain', 'Himithy');
    cy.get('.driver-list').should('contain', 'S3 4KY');
  });
});
