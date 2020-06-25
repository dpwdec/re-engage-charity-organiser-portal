const { urlencoded } = require("express");

describe("Admin login page", () => {
  it("shows successfully login", () => {
    cy.visit("/");
    cy.get("#admin").type("admin");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });

  it("shows wrong password ", () => {
    cy.visit("/");
    cy.get("#admin").type("admin");
    cy.get("#password").type("12345");
    cy.get("#login").click();
  });

  it("shows admin doesn't exist", () => {
    cy.visit("/");
    cy.get("#admin").type("tanil");
    cy.get("#password").type("1234");
    cy.get("#login").click();
  });
});
