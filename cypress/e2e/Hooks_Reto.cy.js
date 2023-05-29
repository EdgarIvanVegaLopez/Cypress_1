/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Reto de la función Hooks', () => {
     let tiempo=1000
     beforeEach(()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.title().should('eq','OrangeHRM')
         cy.wait(tiempo)
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('Admin')
         cy.wait(tiempo)
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('admin123')
         cy.wait(tiempo)
         cy.get('.oxd-button').should('be.visible').click({force:true})
     })

     after(()=>{
        cy.log("########### Último ciclo --- Final de todo #############")
        cy.wait(tiempo)
        cy.xpath("//p[@class='oxd-userdropdown-name'][contains(.,'Paul Collings')]").should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.xpath("//a[@href='/web/index.php/auth/logout'][contains(.,'Logout')]").should('be.visible').click({force:true})
     })

     it('test uno', () => {
         //cy.xpath("//div[contains(@class,'__cypress-selector-playground')]").should('be.visible').click({force:true})
         cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click({force:true})
         cy.wait(tiempo)
     })

     it('test dos', () => {
        //cy.xpath("//div[contains(@class,'__cypress-selector-playground')]").should('be.visible').click({force:true})
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

    it('test tres', () => {
        //cy.xpath("//div[contains(@class,'__cypress-selector-playground')]").should('be.visible').click({force:true})
        cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })
})