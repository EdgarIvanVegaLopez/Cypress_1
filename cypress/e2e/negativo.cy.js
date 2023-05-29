/// <reference types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('descripcion', () => {
     it.only('test', () => {
         let tiempo=1000
         cy.visit('https://es.memedroid.com/memes/detail/3964359/Cjsj-face-reveal') 
         //cy.title().should('eq','titulo')
         cy.wait(tiempo)
         const datos=[]
         const datos2=[]

         cy.get('#sign-in-container').click()
         cy.wait(tiempo)
         cy.get('#login-form-modal-identifier').type("Al-Qaeda")
         cy.wait(tiempo)
         cy.get('#login-form-modal-password').type("V354-Cephei")
         cy.wait(tiempo)
         cy.get('#login-button-modal').click()
         cy.wait(tiempo)
         cy.scrollTo('bottom')
         cy.wait(tiempo)

         cy.xpath("(//a[contains(.,'Cargar más respuestas')])").each(($el, index, $list)=>{
            datos2[index]=$el.text()
            
            // for(let x=0; x<=datos.length; x++){
                
            //     cy.get(".load-more-replies-container").contains("Cargar más respuestas").click({multiple: true})
            //     cy.wait(tiempo)
            // }
         })
         cy.log(datos.length)
        

        //  cy.get(".col-xs-2").each(($el, index, $list)=>{
        //     datos[index]=$el.text()
        //     for(let x=0; x<=datos.length; x++){
        //         //cy.get(".comment-rate-link comment-downvote-link").should("be.visible").click({force:true})
        //         cy.get("[src='/ima8ges/icons/icon_downvote.png']").should("be.visible").click({multiple: true})
        //     }
        //  })
        //  cy.log(datos.length)
     })
})