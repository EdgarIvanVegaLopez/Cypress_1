/// <reference types="Cypress" />
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Ejemplo función tab", () => {
    it("Type con Tab", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get('#userName').type("Rodrigo").
        tab().type("Villanueva").
        tab().type("asdads@gmail.com")
    })

})