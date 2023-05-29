/// <reference types="Cypress" />

describe("Funciones para Type", () => {
    it("Type ENTER", () => {
        cy.visit("https://www.google.com/")
        cy.title().should("eq", "Google")
        cy.wait(1500)

        //cy.get("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input")
        //.type("segunda guerra mundial")
        cy.get("[name='q']").type("segunda guerra mundial {enter}") 
        cy.get(1000)
        cy.get("#kp-wp-tab-overview > div:nth-child(20) > div > div > div > div > div > div.Z26q7c.UK95Uc.jGGQ5e > div > a > h3").click()
    })
})  