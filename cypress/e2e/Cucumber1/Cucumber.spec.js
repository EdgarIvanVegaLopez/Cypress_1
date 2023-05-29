import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'; 

Given('Abrir el navegador principal', ()=>{
    cy.visit("https://demoqa.com/text-box")
})

When('Cargando el nombre', ()=>{
    cy.get("#userName").should("be.visible").type("Rodrigo")
    cy.wait(500)
})

When('Carga el email', ()=>{
    cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
    cy.wait(500)
})

And('Cargando la dirección', ()=>{
    cy.get("#currentAddress").should("be.visible").type("Dirección uno")
    cy.wait(500)
})

Then('Validar el nombre de la página', ()=>{
    cy.title().should('eq','DEMOQA')
         cy.wait(500)
})