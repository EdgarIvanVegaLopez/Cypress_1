/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Select uno ", () => {
    it(" ", () => {
        cy.visit("http://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get('#select-demo').should("be.visible").select("Friday").should("have.value", "Friday")
        cy.wait(2000)
        cy.get('#select-demo').should("be.visible").select("Saturday").should("have.value", "Saturday")
    })

    it("Select dos ", () => {
        cy.visit("https://www.google.com/")
        cy.title().should("eq", "Google")
        cy.wait(1000)

       cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
       cy.wait(1000)
       cy.get("#Imágenes").click()
    })


    it.only("Ipción multiselect ", () => {
        cy.visit("http://demo.seleniumeasy.com/basic-select-dropdown-demo.html")
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)

        cy.get('#multi-select').should("be.visible").select(["California","Ohio","Washington"]).then(()=>{
            cy.get("#printMe").should("be.visible").click()
        })

    })
})