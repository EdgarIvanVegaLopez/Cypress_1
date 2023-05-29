/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe(" ", () => {
    it(" ", () => {
        let tiempo=1000
        cy.visit(" ")
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)
    })
})