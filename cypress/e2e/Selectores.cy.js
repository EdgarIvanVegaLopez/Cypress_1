/// <reference types="Cypress" />
require('cypress-xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Tipos de selecores", () => {
    it("Selector por id ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get('#userName').should('be.visible').type("Carlos")
        cy.get('#userEmail').should('be.visible').type("sdf@asdasd.com")
    })  


    it("Selector por atributo ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

       cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Prez Chavez")
    })  

    it("Selector por Xpath ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

       cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Perez")
       cy.wait(1000)
       cy.xpath("//input[@id='userEmail']").should("be.visible").type("ewsrwer@adsasd.com")
    }) 

    it("Selector por Contains ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

       cy.get(".custom-control-label").contains("Female").click()
       cy.wait(1000)
       cy.get(".custom-control-label").contains("Other").click()
       cy.wait(1000)
    }) 


    it.only("Selector por copy_selector ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','DEMOQA')
        cy.wait(1000)

       cy.get('#userNumber').should("be.visible").type("4451120504")
    }) 
})