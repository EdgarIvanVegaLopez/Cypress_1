/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Referencias a Windows", () => {
    it("Windows propiedades charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(1500)

        cy.document().should("have.property", "charset").and('eq','UTF-8')
    })


    it.only("Windows URL", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(1500)

        cy.url().should('include','random-number.html')
        cy.url().should('eq','https://testsheepnz.github.io/random-number.html')
    })  
})