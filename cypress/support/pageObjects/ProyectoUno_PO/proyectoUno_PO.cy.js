class ProyectoUno_Pou{

    Inicio(){
        let tiempo=1000
        Cypress.config("defaultCommandTimeout", 15000)
        beforeEach(()=>{
            cy.visit('http://demo.seleniumeasy.com/input-form-demo.html')
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
            cy.wait(tiempo)
        })
    }

    SeccionUno(name, lastname, email, tiempo){
        cy.xpath("//input[contains(@name,'first_name')]").clear().should('be.visible').type(name)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'last_name')]").clear().should('be.visible').type(lastname)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'email')]").clear().should('be.visible').type(email)
        cy.wait(tiempo)
    }

    SeccionDos(phone, address, city, estado, tiempo){
        cy.xpath("//input[contains(@name,'phone')]").clear().should('be.visible').type(phone)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'address')]").clear().should('be.visible').type(address)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'city')]").clear().should('be.visible').type(city)
        cy.wait(tiempo)
        cy.xpath("//select[contains(@name,'state')]").select(estado, {force:true})
        cy.wait(tiempo)
    }

    SeccionTres(zip, website, project, tiempo){
        cy.xpath("//input[contains(@name,'zip')]").clear().should('be.visible').type(zip)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'website')]").clear().should('be.visible').type(website)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@value,'yes')]").check().should("be.checked")
        cy.wait(tiempo)
        cy.xpath("//textarea[contains(@class,'form-control')]").clear().should('be.visible').type(project)
        cy.wait(tiempo)
        cy.xpath("//button[@type='submit'][contains(.,'Send')]").should("be.visible").click({force:true})  
    }

}//final

export default ProyectoUno_Pou;