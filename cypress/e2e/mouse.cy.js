/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');
require('@4tw/cypress-drag-drop');

describe("Cypress eventos Mause", () => {
    it("Drag and Drop", () => {
        let tiempo = 1500
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq','The Internet')
        cy.wait(tiempo)
        cy.get('#column-a').drag('#column-b',{force:true})
    })

    it("Drag and Drop 2", () => {
        let tiempo = 1500
        cy.visit("http://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Drag and Drop Demo')
        cy.wait(tiempo)

        cy.get('#todrag > :nth-child(2)').drag('#mydropzone',{force:true})
        cy.get('#todrag > :nth-child(3)').drag('#mydropzone',{force:true})
        cy.get('#todrag > :nth-child(4)').drag('#mydropzone',{force:true})
        cy.get('#todrag > :nth-child(5)').drag('#mydropzone',{force:true})
    })


    it("Drag and Drop 2", () => {
        let tiempo = 1000
        cy.visit("https://www.way2automation.com/")
        cy.title().should('eq','Get Online Selenium Certification Course | Way2Automation')
        cy.wait(tiempo)

        cy.get('#menu-item-27597 > [href="https://www.selenium-tutorial.com/courses/"]').rightclick(); 
        cy.wait(tiempo)

        //cy.get('menu-item-27600').should('be.visible').click()
        cy.contains('Selenium with Python').click({force:true})
    })

    it.only("Slider ", () => {
        let tiempo = 1000
        cy.visit("http://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
        cy.title().should('eq','Selenium Easy - Drag and Drop Range Sliders')
        cy.wait(tiempo)

        cy.get('#slider1 > .range > input').invoke("attr", "value", "80")
        cy.wait(tiempo)
        cy.get('#slider3 > .range > input').invoke("attr", "value", "90")
        cy.wait(tiempo)
        cy.get('#slider5 > .range > input').invoke("attr", "value", "20")

    })
})