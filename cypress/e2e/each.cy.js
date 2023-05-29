/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Bucles For y each", () => {
    it("For uno", () => {
        for (let i=1; i<=10; i++){
            cy.log("Número: " + i)
        }
    })


    it("For dos", () => {
        for (let i=1; i<=10; i++){
            let t=5
            cy.log(t + " X " + i + " = " + t*i)
        }
    })

    it("Each uno", () => {
        let tiempo=1000
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(tiempo)

        cy.get(".single-products").each(($el, index, $list)=>{
           let vestido = $el.text()
           cy.log(vestido)
          // cy.log(index)
          // cy.log($list)
        })
    })


    it("Each uno", () => {
        let tiempo=1000
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        

        cy.get(".col-sm-4").each(($el, index, $list)=>{
           let vestido = $el.text()
          // cy.log(vestido)
          if(vestido.includes("Men Tshirt")){
            cy.contains("View Product").click()
          }
        })
    })


    it("Each uno", () => {
        let tiempo=1000
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(tiempo)

        for(let x=0; x<=3; x++){
            cy.get(".choose").eq(x).click()
            cy.wait(tiempo)
            cy.get('#quantity').should('be.visible').clear().type("4")
            cy.wait(tiempo)
            cy.get(':nth-child(5) > .btn').should('be.visible').click({force:true})
            cy.wait(tiempo)
            cy.get('.modal-footer > .btn').should('be.visible').click({force:true})
            cy.wait(tiempo)
            cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').click({force:true})
            cy.wait(tiempo)
            cy.visit("https://automationexercise.com/")
        }
    })



    it.only("Each uno", () => {
        let tiempo=1000
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(tiempo)
        const datos=[]

        cy.get(".col-sm-4").each(($el, index, $list)=>{
          datos[index]=$el.text()
        }).then(()=>{
            for(let x=0; x<=datos.length; x++){
                cy.get(".choose").eq(x).click()
                cy.wait(tiempo)
                cy.get('#quantity').should('be.visible').clear().type("4")
                cy.wait(tiempo)
                cy.get(':nth-child(5) > .btn').should('be.visible').click({force:true})
                cy.wait(tiempo)
                cy.get('.modal-footer > .btn').should('be.visible').click({force:true})
                cy.wait(tiempo)
                cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').click({force:true})
                cy.wait(tiempo)
                cy.visit("https://automationexercise.com/")
           }
         })

         cy.log(datos.length)

        // for(let x=0; x<=3; x++){
        //     cy.get(".choose").eq(x).click()
        //     cy.wait(tiempo)
        //     cy.get('#quantity').should('be.visible').clear().type("4")
        //     cy.wait(tiempo)
        //     cy.get(':nth-child(5) > .btn').should('be.visible').click({force:true})
        //     cy.wait(tiempo)
        //     cy.get('.modal-footer > .btn').should('be.visible').click({force:true})
        //     cy.wait(tiempo)
        //     cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').click({force:true})
        //     cy.wait(tiempo)
        //     cy.visit("https://automationexercise.com/")
        // }
    })
})