/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Introducción a los asserts", () => {
    it(" ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should("be.visible").type("juan")
        
        cy.get('#userEmail').should("be.visible").type("asdasdasd@adasd.com")
        cy.wait(1000)
        cy.get('#currentAddress').should("be.visible").should("be.enabled").type("Zacatecas No. 40")
        cy.wait(1000)
        cy.get('#permanentAddress').should("be.visible").type("Zacatecas No. 40")
    })
})