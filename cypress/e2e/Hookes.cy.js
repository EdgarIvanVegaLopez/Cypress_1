/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Hooks Ejemplo', () => {
    let tiempo=1000

    before(()=>{
        cy.visit('http://demo.seleniumeasy.com/basic-checkbox-demo.html') 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
        cy.wait(tiempo)
    })

     it('Test uno', () => {
        cy.get('.cb1-element').check().should('be.checked')
        cy.wait(tiempo)
        
     })

     it('Test dos', () => {
        cy.get('.cb1-element').uncheck({force:true}).should('not.be.checked')
        cy.wait(tiempo)
     })
})