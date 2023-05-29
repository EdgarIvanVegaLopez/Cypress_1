/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Reto cypress por medio de comandos personalizados', () => {
     let tiempo=500
     beforeEach(()=>{
         cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
         cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
         cy.wait(tiempo)
     })

     

    //  it('test', () => {
    //      cy.Bloque_Reto_Form("C", "Perez", "carlos@hotmail.com", "4451120504", "dirección uno", "México", "Alabama", "38980", "www.tuputamadre.com", "putos todos", 1000)
    //      cy.xpath("//small[contains(@data-bv-result,'INVALID')]").should("be.visible").then((val)=>{
    //         let dato=val.text()
    //         let mensaje = "Please enter more than 2 characters"
    //         cy.log(dato)
    //         expect(dato).to.equal(mensaje)
    //         if(dato==mensaje){
    //             cy.log("#####################")
    //             cy.log("El email no es valido")
    //             cy.log("#####################") 
    //         }
    //      })
    //  })

    it.only('Nombre mal', () => {
        cy.Bloque_Reto_Form("Carlos", "Perez", "@hotmail.com", "4451120504", "dirección uno", "México", "Alabama", "38980", "www.tuputamadre.com", "putos todos", 500)
        cy.Validar_campo2("(//small[contains(.,'Please enter more than 2 characters')])[1]", "Please enter more than 2 characters", "Nombre", 1000)
    })

    it.only('Email mal', () => {
        cy.Bloque_Reto_Form("Carlos", "Perez", "@hotmail.com", "4451120504", "dirección uno", "México", "Alabama", "38980", "www.tuputamadre.com", "putos todos", 500)
        cy.Validar_campo2("//small[@data-bv-validator='emailAddress']", "Please supply a valid email address", "Email", 1000)
    })
})