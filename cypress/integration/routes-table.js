describe("routes table", () => {  

  it("displays drivers and guests paired up", () => {
    cy.visit('/')
    cy.get('#generate-pairs').click()
    cy.get('.guest').should('contain', 'Doris');
    cy.get('.guest').should('contain', 'Kimothey');
    cy.get('.guest').should('contain', 'Perry');

    cy.get('.driver').should('contain', 'Zeus');
    cy.get('.driver').should('contain', 'Bradley');
    cy.get('.driver').should('contain', 'Kevin');

  });

  it("sorts drivers and guests by closest distance and displays on page", () => {
    cy.visit('/')
    cy.get('#generate-pairs').click()
    cy.get("#pair-1").should('contain', 'Doris');
    cy.get("#pair-1").should('contain', 'Bradley');
    cy.get("#pair-2").should('contain', 'Kimothey');
    cy.get("#pair-2").should('contain', 'Zeus');
    cy.get("#pair-3").should('contain', 'Kevin');
    cy.get("#pair-3").should('contain', 'Perry');
  });

});