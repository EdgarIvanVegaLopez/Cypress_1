/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab')

describe("Segundo reto ", () => {
    it(" ", () => {
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        //buscando
        cy.xpath("//input[contains(@id,'searchbox')]").should('be.visible').type("ACE")
        cy.get("#searchsubmit").should('be.visible').click()

        //add
        cy.get('#add').should('be.visible').click()
        cy.get("[name='name']").should('be.visible').type("cypress")
        cy.get('#introduced').should('be.visible').type("2021-03-15").tab().type("2025-03-15")

        //combo
        cy.get("#company").should('be.visible').select("Nokia").should('have.value', '16').wait(1500)
        cy.get('.primary').should('be.visible').click()
        cy.get('.alert-message').should('be.visible').contains("Done ! Computer cypress has been created")
        cy.xpath("//input[contains(@id,'searchbox')]").should('be.visible').type("cypress")
        cy.get('#searchsubmit').should('be.visible').click()
    })
})