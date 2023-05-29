/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

describe("Elementos de una tabla ", () => {
    it("CHILDREN", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        // cy.get(".btn-group").children(".btn-success")
        // cy.wait(tiempo)
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
        cy.wait(tiempo)
        cy.get(".btn-group").children(".btn-danger").should("contain","Red").click({force:true})
    })


    it("Seleccionar por medio de EQ", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").eq(2).should("contain","Orange").click({force:true})
        cy.wait(tiempo)
        cy.get("[type='button']").eq(4).should("contain","All").click({force:true})

    })


    it("Seleccionar por medio de Filter", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click({force:true})

    })

    it("Seleccionar por medio de Find", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get(".btn-group").find(".btn-danger").should("contain","Red").click({force:true})
        cy.wait(tiempo)
        cy.get("[type='button']").contains("Orange").should("contain","Orange").click({force:true})
    })


    it("Seleccionar por medio de First", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

       cy.get(".btn-group").find("button").first().click()
       cy.wait(tiempo)
       cy.get(".btn-group").find("button").last().click()
    })

    it("Seleccionar los elementos siguientes NextAll", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").should("contain","Green")
        cy.wait(tiempo)
        cy.get("[type='button']").should("contain","Green").nextAll().should("have.length", 4)
    })

    it("Seleccionar elemento padre", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").parent().should("have.class","btn-group")
    })


    it("Reto de las tablas", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        cy.get("[type='button']").eq(4).should("contain","All").click({force:true})

        cy.get("[type='checkbox']").check({force:true})
    })

    it("Reto de las tablas con for", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        for(let x=1; x<=4; x++){
            cy.get("[type='button']").eq(x).click({force:true})
            cy.wait(tiempo)
            cy.get("[type='checkbox']").check({force:true})
        }    
    })

    it("Reto de las tablas con for y Asserts", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-records-filter-demo.html")
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo')
        cy.wait(tiempo)

        for(let x=1; x<=4; x++){
            let nombreBoton = ""

            if(x==1){
                nombreBoton = "Green"
            } else if (x==2){
                nombreBoton = "Orange"
            } else if (x==3){
                nombreBoton = "Red"
            } else if (x==4){
                nombreBoton = "All"
            }

            cy.get("[type='button']").eq(x).should("contain",nombreBoton).click({force:true})
            cy.wait(tiempo)
            cy.get("[type='checkbox']").check({force:true})
        }    
    })


    it("Reto de las tablas con for", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(tiempo)

        const datos=[]

        cy.get(".odd td").each(($el, index, $list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
            }
        })
  
    })


    it("Mostrando los campos", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(tiempo)

        const datos=[]
        
        cy.get(".odd .even td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
            }
        })
    })


    it("Sumando los valores de los campos con la clase .odd", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(tiempo)

        const datos=[]
        let cantidadOdd=0

        cy.get("[role='row'] td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd+=Number(datos[i])
                }
            }
            cy.log("La cantidad total es: " + cantidadOdd)
            expect(cantidadOdd).to.eq(394)
        })
    })




    it.only("Valor de un campo en específico", () => {
        let tiempo=1000
        cy.visit("http://demo.seleniumeasy.com/table-sort-search-demo.html")
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo')
        cy.wait(tiempo)

        const campo=cy.get('tbody > :nth-child(7) > :nth-child(2)')
        cy.log(campo)
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato)

            if(dato.includes("Javascript Developer")){
                campo.eq(index).next().next().then((age)=>{
                    const Edad=age.text()
                    cy.log(Edad)
                    cy.log("La edad de javascript developer es de "+Edad)
                    expect(Edad).to.equal('39')
                })
            }
        })
       
    })
})