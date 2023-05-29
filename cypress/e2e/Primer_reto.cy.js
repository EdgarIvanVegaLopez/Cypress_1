/// <reference types="Cypress" />
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Primer Reto ", () => {
    it(" ", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq',"DEMOQA")
        cy.wait(1000)

        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()

        //clic en add
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.wait(1000)
        cy.get('#firstName').should("be.visible").
        type("Juan").
        tab().type("Perez").
        tab().type("sdfsdf@klhjlkj.com").
        tab().type("55").
        tab().type("50000").
        tab().type("Departamento No. 55")

        cy.get('#submit').should("be.visible").click()

        //buscar juan
        cy.get('#searchBox').should("be.visible").type("Juan")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()
        cy.wait(1000)

        //Editar campo
        cy.get("#edit-record-2").should("be.visible").click()
        cy.wait(1000)
        cy.get('#age').should("be.visible").clear().type("50")
        cy.wait(1000)
        cy.get('#salary').should("be.visible").clear().type("95300")
        cy.wait(1000)
        cy.get('#submit').should("be.visible").click()
        cy.wait(1000)

        //eliminar campo
        cy.get('#delete-record-1').should("be.visible").click()
    })
})