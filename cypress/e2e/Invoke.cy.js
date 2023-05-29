/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Manejo de los alias", () => {
    it("Invoke", () => {
        let tiempo=1500
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        //cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")

        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")
        
        cy.xpath("//label[@for='firstname'][contains(.,'First name:')]").invoke("text").as("title_name")

        cy.wait(tiempo)

        cy.get("@title_name").should("contain", "First name").then(()=>{
            cy.get('#firstname').type("Rodrigo")
        })
    })



    it("Estilos", () => {
        let tiempo=1500
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        //cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.get('[for="firstname"]').invoke("attr","style","color:Blue; font-size: 50px")
    })


    it("Ocultar y mostrar", () => {
        let tiempo=1500
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        //cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.get('[for="firstname"]').invoke("hide")
        cy.get('#firstname').invoke("hide")
        cy.wait(tiempo)
        cy.get('[for="firstname"]').invoke("show","3s")
        cy.get('#firstname').invoke("show","4s")
    })


    it("Ocultar y mostrar", () => {
        let tiempo=1500
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        //cy.title().should('eq','DEMOQA')
        
        
        cy.get("[for='surname']").invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(tiempo)

        cy.get('#firstname').should("be.visible").type("Carlos").then(()=>{
            cy.wait(tiempo)
            cy.get("[for='surname']").invoke("show","3s")
            cy.get('#surname').invoke("show","4s")
            cy.wait(tiempo)
            cy.get('#surname').type("Olmos Salgado")
            cy.wait(tiempo)
        })
    })


    it("Invoke src", () => {
        let tiempo=1500
        cy.visit("http://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        //cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.xpath("//img[@src='http://demo.seleniumeasy.com/img/sponsored-by-CBT.png']").invoke("attr","src").should("include","sponsored-by-CBT.png")
    })

    it.only("Invoke target blanck", () => {
        let tiempo=1500
        cy.visit("https://dvwa.co.uk")
        //cy.title().should('eq','DEMOQA')
        cy.wait(tiempo)

        cy.xpath("//img[@src='http://demo.seleniumeasy.com/img/sponsored-by-CBT.png']").invoke("attr","src").should("include","sponsored-by-CBT.png")
    })
})