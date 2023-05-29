/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Terer reto ", () => {
    it("Tercer reto ", () => {
        cy.visit("http://demo.seleniumeasy.com/jquery-dual-list-box-demo.html")
        cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
        cy.wait(1200)

        cy.get(':nth-child(1) > .form-control').should('be.visible').select(["Isis", "Alice", "Luiza"]).then(()=>{
            cy.wait(1200)
            cy.get('.pAdd').should('be.visible').click().then(()=>{
                cy.get('.pRemoveAll').should('be.visible').click()
                cy.wait(1200)
            })
           
        })
        
        
        
        
    })
})