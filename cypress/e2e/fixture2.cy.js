/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

// before(function(){
//     cy.fixture("datos").then(function(data){
//         globalThis.data=data
//     })
// })

// before(function(){
//     cy.fixture("datos").as("Informacion")
// })

describe('Carga por Fixtures', () => {
    it.only('Test uno cargando desde Json', () => {
        cy.fixture("MOCK_DATA").then(tesdata =>{
            tesdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                let tiempo=500
                cy.visit('https://demoqa.com/text-box') 
                cy.title().should('eq','DEMOQA')
                cy.wait(tiempo)

                cy.get('#userName').should("be.visible").type(d_nombre)
                cy.wait(tiempo)
                cy.get('#userEmail').should("be.visible").type(d_email)
                cy.wait(tiempo)
                cy.get('#currentAddress').should("be.visible").type(d_dir1)
                cy.wait(tiempo)
                cy.get('#permanentAddress').should("be.visible").type(d_dir2)
                cy.wait(tiempo)
                cy.get('#submit').should("be.visible").click({force:true})
            })
        })
    })
})