// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector, texto, tiempo) => {
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Texto_visible_xpath', (selector, texto, tiempo) => {
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_normal', (selector, tiempo) => {
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_force', (selector, tiempo) => {
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Click_force_xpath', (selector, tiempo) => {
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
})

//Funciones por conjuntoo complejo

Cypress.Commands.add('Bloque_ToolsQA', (name, email, dir1, dir2, tiempo) => {
   cy.get('#userName').should('be.visible').type(name)
   cy.wait(tiempo)
   cy.get('#userEmail').should('be.visible').type(email)
   cy.wait(tiempo)
   cy.get('#currentAddress').should('be.visible').type(dir1)
   cy.wait(tiempo)
   cy.get('#permanentAddress').should('be.visible').type(dir2)
   cy.wait(tiempo)
   cy.get('#submit').should('be.visible').click({force:true})
})

Cypress.Commands.add('Bloque_Reto_Form', (name, lastname, email, phone, address, city, estado, zip, website, project, tiempo) => {
  cy.xpath("//input[contains(@name,'first_name')]").clear().should('be.visible').type(name)
  cy.wait(tiempo)
  cy.xpath("//input[contains(@name,'last_name')]").clear().should('be.visible').type(lastname)
  cy.wait(tiempo)
  cy.xpath("//input[contains(@name,'email')]").clear().should('be.visible').type(email)
  cy.wait(tiempo)
  cy.xpath("//input[contains(@name,'phone')]").clear().should('be.visible').type(phone)
  cy.wait(tiempo)
  cy.xpath("//input[contains(@name,'address')]").clear().should('be.visible').type(address)
  cy.wait(tiempo)
  cy.xpath("//input[contains(@name,'city')]").clear().should('be.visible').type(city)
  cy.wait(tiempo)
  cy.xpath("//select[contains(@name,'state')]").select(estado, {force:true})
  cy.wait(tiempo)
  cy.xpath("//input[contains(@name,'zip')]").clear().should('be.visible').type(zip)
  cy.wait(tiempo)
  cy.xpath("//input[contains(@name,'website')]").clear().should('be.visible').type(website)
  cy.wait(tiempo)
  cy.xpath("//input[contains(@value,'yes')]").check().should("be.checked")
  cy.wait(tiempo)
  cy.xpath("//textarea[contains(@class,'form-control')]").clear().should('be.visible').type(project)
  cy.wait(tiempo)
  cy.xpath("//button[@type='submit'][contains(.,'Send')]").should("be.visible").click({force:true})  
 })


Cypress.Commands.add('Validar_campo', (selector, men, nombre_campo, tiempo) => {
    cy.xpath(selector).then((val)=>{
        let dato=val.text()
        cy.log(dato)
        let mensaje = men
        expect(dato).to.contain(mensaje)
        if(dato==mensaje){
            cy.log("#####################")
            cy.log("El " + nombre_campo + " no es válido")
            cy.log("#####################")
        }
    })
})

Cypress.Commands.add('Validar_campo2', (selector, men, nombre_campo, tiempo) => {
    cy.xpath(selector).should("contain", men).then((val)=>{
        cy.log("#####################")
        cy.log("El " + nombre_campo + " no es válido")
        cy.log("#####################")    
    })
})
