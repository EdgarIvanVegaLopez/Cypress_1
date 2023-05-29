/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Alertas", () => {
    it(" ", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        //cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.xpath("//a[@href='#myModal0']").click()
        
        cy.xpath("(//a[@onclick='history.go(0)'])[1]").click({force:true})
    })
})