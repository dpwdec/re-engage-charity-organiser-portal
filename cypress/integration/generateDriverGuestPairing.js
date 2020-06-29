describe("routes table", () => {
  beforeEach(() => {
    cy.task('dropAdmins');
    cy.task('addAdmin', { adminName: "admin", password: "1234" });

    cy.task("dropMembers");
    cy.task("addMember", { name: "Zeus", address: "SW64QP", role: "driver" });
    cy.task("addMember", { name: "Kevin", address: "SW74SS", role: "driver" });
    cy.task("addMember", { name: "Bradley", address: "SE153XX", role: "driver"});

    cy.task("addMember", { name: "Doris", address: "SE58HU", role: "guest" });
    cy.task("addMember", { name: "Tanil", address: "SW114NJ", role: "guest" });
    cy.task("addMember", { name: "Dec", address: "SE229EX", role: "guest" });

    cy.visit("admin/login");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  afterEach(() => {
    cy.get('#logout').click();
  });

  it("displays drivers and guests paired up", () => {
    this.skip();
    cy.visit("/");
    cy.get("#pairing-tab").click();
    cy.get("#generate-pairs").click();
    cy.get(".guest").should("contain", "Dec");
    cy.get(".guest").should("contain", "Tanil");
    cy.get(".guest").should("contain", "Doris");

    cy.get(".driver").should("contain", "Zeus");
    cy.get(".driver").should("contain", "Bradley");
    cy.get(".driver").should("contain", "Kevin");
  });

  it("sorts drivers and guests by closest distance and displays on page", () => {
    this.skip();
    cy.visit("/");
    cy.get("#pairing-tab").click();
    cy.get("#generate-pairs").click();
    cy.get("#pair-1").should("contain", "Dec");
    cy.get("#pair-1").should("contain", "Bradley");
    cy.get("#pair-2").should("contain", "Kevin");
    cy.get("#pair-2").should("contain", "Tanil");
    cy.get("#pair-3").should("contain", "Doris");
    cy.get("#pair-3").should("contain", "Zeus");
  });
});
