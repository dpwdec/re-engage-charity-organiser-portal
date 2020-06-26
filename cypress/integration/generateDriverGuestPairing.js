describe("routes table", () => {
  beforeEach(() => {
    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();

    // drop the database
    // cy.task("getMembers");
    // insert expected members
    // generate pairs 
    cy.task("dropDatabase");
    cy.task("addMember");
  });

  afterEach(() => {
    cy.get('#logout').click();
  });

  it("displays drivers and guests paired up", () => {
    cy.visit("/");
    cy.get("#generate-pairs").click();
    cy.get(".guest").should("contain", "Dec");
    cy.get(".guest").should("contain", "Tanil");
    cy.get(".guest").should("contain", "Doris");

    cy.get(".driver").should("contain", "Zeus");
    cy.get(".driver").should("contain", "Bradley");
    cy.get(".driver").should("contain", "Kevin");
  });

  it("sorts drivers and guests by closest distance and displays on page", () => {
    cy.visit("/");
    cy.get("#generate-pairs").click();
    cy.get("#pair-1").should("contain", "Dec");
    cy.get("#pair-1").should("contain", "Bradley");
    cy.get("#pair-2").should("contain", "Kevin");
    cy.get("#pair-2").should("contain", "Tanil");
    cy.get("#pair-3").should("contain", "Doris");
    cy.get("#pair-3").should("contain", "Zeus");
  });
});
