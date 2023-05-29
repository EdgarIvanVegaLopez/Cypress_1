/// <reference types='Cypress' />
import 'cypress-file-upload';
import ProyectoUno_PO from '../support/pageObjects/ProyectoUno_PO/proyectoUno_PO.cy'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Page objects models', () => {

    const maestro = new ProyectoUno_PO()

    maestro.Inicio()
    // let tiempo=1000
    // beforeEach(()=>{
    //     cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
    //     cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
    //     cy.wait(tiempo)
    // })
    

   Cypress.on('uncaught:exception', (err, runnable) => {
    return false
   }) 

    it('Test Uno', () => {
        maestro.SeccionUno("Carlos", "Olmos", "carlos@asda.com", 500)
    })

    it('Test Dos', () => {
        maestro.SeccionDos("4451120504", "Dirección Uno", "Calcuta", "Colorado", 500)
    })

    it('Test Tres', () => {
        maestro.SeccionTres("38980", "mierda.com", "Proyecto de mierda", 500)
    })

    it.only("Test Todo", () => {
        maestro.SeccionUno("Carlos", "Olmos", "carlos@asda.com", 500)

        maestro.SeccionDos("4451120504", "Dirección Uno", "Calcuta", "Colorado", 500)
        cy.Validar_campo2("//small[contains(@data-bv-validator,'phone')]","Please supply a vaild phone number with area code", "Teléfono")

        maestro.SeccionTres("38980", "mierda.com", "Proyecto de mierda", 500)       
        cy.Validar_campo2("//small[@class='help-block'][contains(.,'Please supply a description of your project')]","Please supply a description of your project", "Proyecto")
    })
})  