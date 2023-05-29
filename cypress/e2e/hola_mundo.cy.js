/// <reference types="cypress" />

describe('primer Test con Cypress', ()=>{
    it("Esto es un hola mundo desde Cypress", ()=>{
        cy.log("Bienvenidos a Cypress")
        cy.visit('https://testingqarvn.com.es/datos-personales/')

        cy.get('#wsf-1-field-21').type("Rodrigo")
        cy.wait(1000)
        cy.get('#wsf-1-field-22').type("Villanueva")
        cy.wait(1000)
        cy.get('#wsf-1-field-23').type("rodrigo@gmail.com")
        cy.wait(1000)
        cy.get('#wsf-1-field-24').type("7987987")
        cy.wait(1000)
        cy.get('#wsf-1-field-28').type("rodrigo@gmail.com")
        cy.wait(1000)
        cy.get('#wsf-1-field-27').click()

        
        cy.wait(3000)
    })
})