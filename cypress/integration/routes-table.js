describe("routes table", () => {  

  it("displays drivers and guests paired up", () => {
    cy.visit('/')
    cy.get('#generate-pairs').click()
    // cy.get("#pair-1").should('contain', 'Doris');
    // cy.get("#pair-1").should('contain', 'Bradley');
    // cy.get("#pair-2").should('contain', 'Kimothey');
    // cy.get("#pair-2").should('contain', 'Zeus');
    // cy.get("#pair-3").should('contain', 'Kevin');
    // cy.get("#pair-3").should('contain', 'Perry');

    cy.get('#drivers').should('contain', 'Doris');
    cy.get('#guests').should('contain', 'Bradley');
    cy.get('#drivers').should('contain', 'Kimothey');
    cy.get('#guests').should('contain', 'Zeus');
    cy.get('#drivers').should('contain', 'Kevin'); 
    cy.get('#guests').should('contain', 'Perry');

  });

});