/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe(" ", () => {
    it("Fecha uno ", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)

        //cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').type("09/19/2021").then(()=>{
        //    cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').type('{esc}')
        //    cy.get('[placeholder="Start date"]').should("be.visible").focus()
        //    cy.get('#sandbox-container1 > .input-group > .form-control').click(10,20)
        //})

       cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').click()
       cy.wait(tiempo)
       cy.get('tbody > :nth-child(2) > :nth-child(3)').click({force:true})
    })



    it.only("Fecha dos ", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.wait(tiempo)

       cy.get('[placeholder="Start date"]').should('be.visible').type("19/09/2021 {esc}").tab().type("19/10/2021 {esc}")
       //cy.get('[placeholder="End date"]').should('be.visible').type("19/10/2021 {esc}")
    })
})