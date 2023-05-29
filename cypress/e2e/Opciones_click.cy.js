/// <reference types="Cypress" />
require('cypress-plugin-tab')

describe("Opciones de Click", () => {
    it("Click sencillo ", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin").
        tab().type("admin123")
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get(':nth-child(6) > .oxd-main-menu-item').should("be.visible").click()
    })

    it("Click Force true ", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin").
        tab().type("admin123")
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get(':nth-child(6) > .oxd-main-menu-item').should("be.visible").click({force: true})
    })

    it.only("Click por coordenadas x y", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin").
        tab().type("admin123")
        cy.get('.oxd-button').should('be.visible').click()
        cy.wait(1500)

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(50,5)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible").click(70,5)
    })
})