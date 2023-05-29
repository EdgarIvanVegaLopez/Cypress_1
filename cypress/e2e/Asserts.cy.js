/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

/*
Cypress.on('window:before:load', function (window) {
    const original = window.EventTarget.prototype.addEventListener
  
    window.EventTarget.prototype.addEventListener = function () {
      if (arguments && arguments[0] === 'beforeunload') {
        return
      }
      return original.apply(this, arguments)
    }
  
    Object.defineProperty(window, 'onbeforeunload', {
      get: function () { },
      set: function () { }
    })
  })
*/

describe("Asserts ", () => {
  
    it("Assert contain ", () => {
        cy.visit("https://automationexercise.com/")
        cy.title().should('eq','Automation Exercise')
        cy.wait(1000)

        cy.get(".row").contains("Products").click()

    })

    it("Assert find, eq ", () => {
      cy.visit("https://automationexercise.com/")
      cy.title().should('eq','Automation Exercise')
      cy.wait(1000)
      cy.get(".features_items").find(".col-sm-4").eq(2).contains("View Product").click()

      cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[3]').contains("New").then((e)=>{
        
        let estado = e.text()
        cy.log(estado)
       
        if(estado=="Condition: New"){
          cy.log("El estado es nuevo")
        }else{
          cy.log("No es nuevo")
        }
      })

      cy.get(':nth-child(5) > span').then((e)=>{
        
        let precio=e.text()
        cy.log(precio)
        precio=precio.slice(4,8)
        cy.log(precio)

        if(precio>500){
          cy.log("El vestido sale de nuestro presupuesto")
          cy.wait(2000)
          cy.get('.shop-menu > .nav > :nth-child(1) > a').click()
        }else{
          cy.log("El vestido está en nuestro presupuesto")
          cy.wait(2000)
          cy.get(':nth-child(5) > .btn').click()
          cy.wait(2000)
          cy.get('.modal-footer > .btn').click()
          cy.wait(2000)
          cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        }
      })

  })

  it("Assert contain.text y have.text ", () => {
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)

    cy.get('#userName').should("be.visible").type("Rodrigo")
    cy.get('#userEmail').should("be.visible").type("sdfsdf@addasd.com")
    cy.get('#submit').should("be.visible").click()

    cy.get("#name").should("have.text","Name:Rodrigo")
    cy.get("#name").should("contain.text","Rodrigo")

  })

  it("Assert contain.text y have.text ", () => {
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)

    cy.get('#userName').should("be.visible").type("Rodrigo")

    cy.get('#userName').should("have.value","Rodrigo").then(()=>{
      cy.get('#userEmail').should("be.visible").type("sdfsdf@addasd.com")
      cy.get('#submit').should("be.visible").click()
    })
  })


  it("Assert have.class ", () => {
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)

    cy.get('#userName').should("be.visible").should("have.class","mr-sm-2").then(()=>{
      cy.get('#userName').type("Rodrigo")
    })

  })


  it("Assert have.classy la función and ", () => {
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)

    cy.get('#userName').should("be.visible").and("have.class","mr-sm-22").then(()=>{
      cy.get('#userName').type("Rodrigo")
    })

  })


  it("Assert have_not_class ", () => {
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','DEMOQA')
    cy.wait(1000)

    cy.get('#userName').should("be.visible").and("not.have.class","mr-sm-22").then(()=>{
      cy.get('#userName').type("Rodrigo")
    })

  })


  it("Assert length css y el css ", () => {
    let tiempo = 1000
    cy.visit("http://demo.seleniumeasy.com/basic-first-form-demo.html")
    cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
    cy.wait(tiempo)

    cy.get('.form-group > #user-message').should("be.visible").type("Demo del contenido")

    cy.wait(tiempo)
    cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})

  })



  it("Assert length css y el css ", () => {
    let tiempo = 1300
    cy.visit("http://demo.seleniumeasy.com/basic-first-form-demo.html")
    cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
    cy.wait(tiempo)

    let a = 5
    let b = 5

    cy.get('#sum1').should('be.visible').and('have.class', 'form-control').type(a)
    cy.wait(tiempo)
    cy.get('#sum2').should('be.visible').and('have.class', 'form-control').type(b)
    cy.wait(tiempo)
    cy.contains("[type='button']", "Get Total").click()

    cy.get("#displayvalue").should('be.visible').then((e)=>{
     
      cy.log("El resultado de la suma: " + e.text())
      let res=e.text()

      /*
      if(r==res){
        cy.log("Son iguales")
      }else{
        cy.log("el resultado es incorrecto")
      }*/

      if(res > 50){
        a=a-10
        b=b-10
        cy.get('#sum1').should('be.visible').and('have.class', 'form-control').clear().type(a)
        cy.wait(tiempo)
        cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b)
        cy.wait(tiempo)
        cy.contains("[type='button']", "Get Total").click()
      }else{
        a=a+5
        b=b+5
        cy.get('#sum1').should('be.visible').and('have.class', 'form-control').clear().type(a)
        cy.wait(tiempo)
        cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b)
        cy.wait(tiempo)
        cy.contains("[type='button']", "Get Total").click()
      }

    })
  })


  it.only("Assert length css y el css ", () => {
    let tiempo = 1600
    cy.visit("http://demo.seleniumeasy.com/basic-first-form-demo.html")
    cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
    cy.wait(tiempo)

    let a = 40
    let b = 35

    cy.get('#sum1').should('be.visible').and('have.class', 'form-control').type(a)
    cy.wait(tiempo)
    cy.get('#sum2').should('be.visible').and('have.class', 'form-control').type(b)
    cy.wait(tiempo)
    cy.contains("[type='button']", "Get Total").click()

    cy.get("#displayvalue").should('be.visible').then((e)=>{
      cy.log("El resultado de la suma: " + e.text())
      let res=e.text()
      if(res > 50){
        a=a-10
        b=b-10
        cy.get('#sum1').invoke("attr", "placeholder").should("contain", "Enter value").then(()=>{
          cy.get('#sum1').clear().type(a)
          cy.wait(tiempo)
          cy.get('#sum1').invoke("attr","style","color:blue")
        })
        cy.wait(tiempo)
        cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b)
        cy.wait(tiempo)
        cy.get('#sum2').invoke("attr","style","color:blue")
        cy.wait(tiempo)
        cy.contains("[type='button']", "Get Total").click()
        cy.get("#displayvalue").should('be.visible').then((e)=>{
          cy.get("#displayvalue").invoke("attr","style","color:red")
        })
      }else{
        a=a+5
        b=b+5
        cy.get('#sum1').should('be.visible').and('have.class', 'form-control').clear().type(a)
        cy.wait(tiempo)
        cy.get('#sum2').should('be.visible').and('have.class', 'form-control').clear().type(b)
        cy.wait(tiempo)
        cy.contains("[type='button']", "Get Total").click()
      }

    })
  })

  

})