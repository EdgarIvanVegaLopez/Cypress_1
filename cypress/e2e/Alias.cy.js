/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Manejo de los alias", () => {
    it("Alias uno", () => {
        let tiempo=1000
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        //cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.get('#firstname').should("be.visible").as("nom")
        cy.get("@nom").type("Osama")
        cy.wait(tiempo)

        cy.get('#surname').should("be.visible").as("ape")
        cy.get('@ape').type("Bin Laden")
        cy.wait(tiempo)

        cy.get('#age').should("be.visible").as("ag")
        cy.get('@ag').type(43)
        cy.wait(tiempo)

        cy.get('#country').should("be.visible").as("coun")
        cy.get('@coun').select("Afghanistan").should("have.value","Afghanistan")
        cy.wait(tiempo)

        cy.get('#notes').should("be.visible").as("not")
        cy.get('@not').type("sdfsdfsdf")
        cy.wait(tiempo)

        cy.get('[type="submit"]').click({force:true})
    })
})