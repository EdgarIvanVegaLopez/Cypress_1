/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Navegacion entre paginas', () => {
     it('Back, forward', () => {
         let tiempo=1000
         cy.visit('https://demoqa.com/') 
         cy.title().should('eq','DEMOQA')
         cy.wait(tiempo)

         cy.get(':nth-child(1) > :nth-child(1) > .avatar').should("be.visible").click({force:true})
         cy.wait(tiempo)

         cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click({force:true})
         cy.wait(tiempo)

         cy.go("back")
         cy.go("back")

         cy.go("forward")
         cy.go("forward")
     })


     it.only('refresh', () => {
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .avatar').should("be.visible").click({force:true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should("be.visible").click({force:true})
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('Juan')
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type('Gomez@hotmail.com')
        cy.wait(tiempo)

        cy.reload()

        cy.wait(tiempo)

        cy.go("back")        
    })
})