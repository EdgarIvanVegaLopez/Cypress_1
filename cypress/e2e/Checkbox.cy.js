/// <reference types="Cypress" />
require('cypress-xpath');

describe("Nueva sección Checkbox ", () => {
    it("Check uno ", () => {
        cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(2000)
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })

    it("Check por seleccion", () => {
        cy.visit("http://demo.seleniumeasy.com/basic-checkbox-demo.html")
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        cy.get('#isAgeSelected').check().should("be.checked")
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").check()
    })


    it.only("Raddiobutton", () => {
        cy.visit("http://demo.seleniumeasy.com/basic-radiobutton-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(1000)

        cy.get('.panel-body > :nth-child(3) > input').click()
        
    })
})