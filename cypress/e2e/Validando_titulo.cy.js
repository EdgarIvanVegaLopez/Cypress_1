/// <reference types="Cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Seccion 1 Validando el título", () => {
    it("Test Validar el título", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')

        cy.log("Ok la función title funcionó bien")
    })
})