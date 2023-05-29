/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('descripcion', () => {
     it.only('test', () => {
         let tiempo=500
         cy.visit('url') 
         cy.title().should('eq','titulo')
         cy.wait(tiempo)
     })
})