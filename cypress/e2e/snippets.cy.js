/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('descripcion', () => {
     let tiempo=1000
     before(()=>{
         cy.visit('url')
         cy.title().should('eq','titulo')
         cy.wait(tiempo)
     })
     it.only('test', () => {
         let tiempo=500
         cy.visit('url') 
         cy.title().should('eq','titulo')
         cy.wait(tiempo)
     })
})