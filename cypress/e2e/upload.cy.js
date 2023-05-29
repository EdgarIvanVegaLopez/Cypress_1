/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');
import 'cypress-file-upload';

describe(" ", () => {
    it(" ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        const ruta='img1.jpg'
        cy.get("[type='file']").attachFile(ruta)
        cy.wait(2000)
    })
})