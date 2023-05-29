/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('comandos personalizados', () => {
     let tiempo=1000
     before(()=>{
         cy.visit('https://demoqa.com/text-box')
         cy.title().should('eq','DEMOQA')
         cy.wait(tiempo)
     })
     it('Demo uno', () => {
        cy.Texto_visible("#userName", "Juan", 1000)
        cy.Texto_visible("#userEmail", "juan@gmail.com", 1500)

        cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]", "Dirección 1", 1000)
        cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]", "Dirección 2", 1000)
     
        cy.Click_force_xpath("//button[contains(@id,'submit')]", 1000)
    })

    it.only('Demo dos', () => {
       cy.Bloque_ToolsQA("Juan", "juan@email.com", "dirección uno", "dirección dos", 1000)
    })
})